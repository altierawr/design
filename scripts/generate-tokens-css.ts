import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { paletteCssOrder, type TAccentColorName } from "../src/tokens/meta.ts";
import { palettes } from "../src/tokens/palettes.ts";
import { radius, radiusOrder } from "../src/tokens/radius.ts";
import { rootColors } from "../src/tokens/root.ts";
import { space, spaceOrder } from "../src/tokens/space.ts";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const tokensDir = join(repoRoot, "src", "styles", "tokens");
const colorsDir = join(tokensDir, "colors");

const formatSpaceCss = () => {
  const lines = [":root {"];

  for (const tokenName of spaceOrder) {
    lines.push(`  --space-${tokenName.replaceAll("_", "-")}: ${space[tokenName]}px;`);
  }

  lines.push("}");

  return lines.join("\n");
};

const formatRadiusCss = () => {
  const lines = [":root {"];

  for (const tokenName of radiusOrder) {
    lines.push(`  --radius-${tokenName}: ${radius[tokenName]}px;`);
  }

  lines.push("}");

  return lines.join("\n");
};

const formatColorsIndexCss = () => paletteCssOrder.map((paletteName) => `@import "./${paletteName}.css";`).join("\n");

const writeCssFile = async (filePath: string, content: string) => {
  await writeFile(filePath, `${content.trimEnd()}\n`);
};

const tokenOrder = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "a10",
  "a11",
  "a12",
  "contrast",
  "surface",
  "indicator",
  "track",
] as const;

const writeTokenLines = (lines: string[], paletteName: string, tokens: Record<string, string>, indent: string) => {
  for (const tokenName of tokenOrder) {
    const value = tokens[tokenName];
    if (!value) {
      continue;
    }
    lines.push(`${indent}--${paletteName}-${tokenName}: ${value};`);
  }
  for (const [tokenName, value] of Object.entries(tokens)) {
    if (tokenOrder.includes(tokenName as (typeof tokenOrder)[number])) {
      continue;
    }
    lines.push(`${indent}--${paletteName}-${tokenName}: ${value};`);
  }
};

const formatPaletteCss = (paletteName: Exclude<TAccentColorName, "whiteblack">) => {
  const palette = palettes[paletteName];
  const lines: string[] = [];

  if (Object.keys(palette.root).length) {
    lines.push(":root {");
    writeTokenLines(lines, paletteName, palette.root, "  ");
    lines.push("}");
    lines.push("");
  }

  lines.push(":root,");
  lines.push(".light,");
  lines.push(".light-theme {");
  writeTokenLines(lines, paletteName, palette.light, "  ");
  if (Object.keys(palette.mix.light).length) {
    lines.push("");
    lines.push("  @supports (color: color-mix(in oklab, white, black)) {");
    writeTokenLines(lines, paletteName, palette.mix.light, "    ");
    lines.push("  }");
  }
  lines.push("}");
  lines.push("");

  lines.push(".dark,");
  lines.push(".dark-theme {");
  writeTokenLines(lines, paletteName, palette.dark, "  ");
  if (Object.keys(palette.mix.dark).length) {
    lines.push("");
    lines.push("  @supports (color: color-mix(in oklab, white, black)) {");
    writeTokenLines(lines, paletteName, palette.mix.dark, "    ");
    lines.push("  }");
  }
  lines.push("}");

  const hasP3 =
    Object.keys(palette.p3Root).length || Object.keys(palette.p3Light).length || Object.keys(palette.p3Dark).length;
  if (hasP3) {
    lines.push("");
    lines.push("@supports (color: color(display-p3 1 1 1)) {");
    lines.push("  @media (color-gamut: p3) {");
    if (Object.keys(palette.p3Root).length) {
      lines.push("    :root {");
      writeTokenLines(lines, paletteName, palette.p3Root, "      ");
      lines.push("    }");
      lines.push("");
    }
    lines.push("    :root,");
    lines.push("    .light,");
    lines.push("    .light-theme {");
    writeTokenLines(lines, paletteName, palette.p3Light, "      ");
    lines.push("    }");
    lines.push("  }");
    lines.push("}");

    lines.push("");
    lines.push("@supports (color: color(display-p3 1 1 1)) {");
    lines.push("  @media (color-gamut: p3) {");
    lines.push("    .dark,");
    lines.push("    .dark-theme {");
    writeTokenLines(lines, paletteName, palette.p3Dark, "      ");
    lines.push("    }");
    lines.push("  }");
    lines.push("}");
  }

  return lines.join("\n").trimEnd();
};

const formatRootColorCss = () => {
  const lines: string[] = [];
  lines.push(":root,");
  lines.push(".light,");
  lines.push(".light-theme {");
  lines.push(`  --gray-0: ${rootColors.light.gray0};`);
  lines.push("}");
  lines.push("");
  lines.push(".dark,");
  lines.push(".dark-theme {");
  lines.push(`  --gray-0: ${rootColors.dark.gray0};`);
  lines.push("}");
  lines.push("");

  for (const accentName of ["whiteblack", ...paletteCssOrder]) {
    lines.push(`[data-accent-color="${accentName}"] {`);
    for (const index of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]) {
      const value =
        accentName === "whiteblack"
          ? index === "1"
            ? "var(--gray-1)"
            : "var(--gray-12)"
          : `var(--${accentName}-${index})`;
      lines.push(`  --accent-${index}: ${value};`);
    }
    for (const index of ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12"]) {
      const value = accentName === "whiteblack" ? `var(--gray-${index})` : `var(--${accentName}-${index})`;
      lines.push(`  --accent-${index}: ${value};`);
    }
    lines.push(`  --accent-contrast: var(--${accentName}-contrast);`);
    lines.push(`  --accent-surface: var(--${accentName}-surface);`);
    lines.push(`  --accent-indicator: var(--${accentName}-indicator);`);
    lines.push(`  --accent-track: var(--${accentName}-track);`);
    lines.push("}");
    lines.push("");
  }

  return lines.join("\n").trimEnd();
};

const main = async () => {
  await mkdir(colorsDir, { recursive: true });

  await Promise.all([
    writeCssFile(join(tokensDir, "color.css"), formatRootColorCss()),
    writeCssFile(join(tokensDir, "space.css"), formatSpaceCss()),
    writeCssFile(join(tokensDir, "radius.css"), formatRadiusCss()),
    writeCssFile(join(colorsDir, "index.css"), formatColorsIndexCss()),
    ...paletteCssOrder.map((paletteName) =>
      writeCssFile(join(colorsDir, `${paletteName}.css`), formatPaletteCss(paletteName)),
    ),
  ]);
};

await main();
