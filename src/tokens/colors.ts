import { paletteCssOrder } from "./meta";
import { palettes } from "./palettes";
import { rootColors } from "./root";

type TTokenMap = Record<string, string>;

const toTokenKey = (paletteName: string, tokenName: string) => {
  if (/^\\d+$/.test(tokenName)) {
    return `${paletteName}${tokenName}`;
  }

  if (tokenName.startsWith("a") && /^\\d+$/.test(tokenName.slice(1))) {
    return `${paletteName}A${tokenName.slice(1)}`;
  }

  const capitalized = tokenName.charAt(0).toUpperCase() + tokenName.slice(1);
  return `${paletteName}${capitalized}`;
};

const mergeThemeTokens = (paletteName: string, tokens: TTokenMap, target: TTokenMap) => {
  for (const [tokenName, tokenValue] of Object.entries(tokens)) {
    target[toTokenKey(paletteName, tokenName)] = tokenValue;
  }
};

const buildThemeColorTokens = (theme: "light" | "dark", useP3: boolean) => {
  const mergedTokens: TTokenMap = {
    ...rootColors[theme],
  };

  for (const paletteName of paletteCssOrder) {
    const palette = palettes[paletteName];
    const baseTokens = {
      ...palette.root,
      ...(theme === "light" ? palette.light : palette.dark),
    };
    const p3Tokens = useP3
      ? {
          ...palette.p3Root,
          ...(theme === "light" ? palette.p3Light : palette.p3Dark),
        }
      : null;

    mergeThemeTokens(paletteName, baseTokens, mergedTokens);

    if (p3Tokens) {
      mergeThemeTokens(paletteName, p3Tokens, mergedTokens);
    }
  }

  return mergedTokens;
};

export const colors = {
  light: buildThemeColorTokens("light", false),
  dark: buildThemeColorTokens("dark", false),
} as const;

export const colorsP3 = {
  light: buildThemeColorTokens("light", true),
  dark: buildThemeColorTokens("dark", true),
} as const;
