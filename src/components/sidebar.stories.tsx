import { Meta, StoryObj } from "@storybook/react-vite";
import { AlbumIcon, ChevronsUpDownIcon, LogOutIcon, MusicIcon, PlusIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Menu } from ".";
import * as Sidebar from "./sidebar";

const meta = {
  component: Sidebar.Root,
  title: "Sidebar",
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="h-[700px]">
        <Sidebar.Root className="w-[287px] bg-(--gray-2)">
          <Sidebar.Header>
            <Sidebar.HeaderLogo>
              <Sidebar.HeaderLogoSquareImage>
                <img src="/logo.png" />
              </Sidebar.HeaderLogoSquareImage>
              <span>Alt Design</span>
            </Sidebar.HeaderLogo>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupHeader>
                <Sidebar.GroupTitle>Your library</Sidebar.GroupTitle>
              </Sidebar.GroupHeader>

              <Sidebar.List>
                <Sidebar.Item tooltip="Artists">
                  <Sidebar.ItemButton isActive>
                    <UserIcon />
                    <span>Artists</span>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Albums">
                  <Sidebar.ItemButton>
                    <AlbumIcon />
                    <span>Albums</span>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Tracks">
                  <Sidebar.ItemButton>
                    <MusicIcon />
                    <span>Tracks</span>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
              </Sidebar.List>
            </Sidebar.Group>

            <Sidebar.Group variant="compact">
              <Sidebar.GroupHeader>
                <Sidebar.GroupTitle>Created playlists</Sidebar.GroupTitle>
                <Sidebar.GroupAction tooltip="Add playlist">
                  <PlusIcon />
                </Sidebar.GroupAction>
              </Sidebar.GroupHeader>

              <Sidebar.List>
                <Sidebar.Item tooltip="Chill">
                  <Sidebar.ItemButton>
                    <img src="/albumcover2.jpg" />
                    <div>
                      <p>Chill</p>
                      <p className="text-(--gray-11)! text-xs">54 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Rave">
                  <Sidebar.ItemButton>
                    <img src="/albumcover3.jpg" />
                    <div>
                      <p>Rave</p>
                      <p className="text-(--gray-11)! text-xs">2 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Pure sound">
                  <Sidebar.ItemButton>
                    <img src="/albumcover1.jpg" />
                    <div>
                      <p>Pure sound</p>
                      <p className="text-(--gray-11)! text-xs">13 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Chill">
                  <Sidebar.ItemButton>
                    <img src="/albumcover2.jpg" />
                    <div>
                      <p>Chill</p>
                      <p className="text-(--gray-11)! text-xs">54 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Rave">
                  <Sidebar.ItemButton>
                    <img src="/albumcover3.jpg" />
                    <div>
                      <p>Rave</p>
                      <p className="text-(--gray-11)! text-xs">2 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Pure sound">
                  <Sidebar.ItemButton>
                    <img src="/albumcover1.jpg" />
                    <div>
                      <p>Pure sound</p>
                      <p className="text-(--gray-11)! text-xs">13 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Chill">
                  <Sidebar.ItemButton>
                    <img src="/albumcover2.jpg" />
                    <div>
                      <p>Chill</p>
                      <p className="text-(--gray-11)! text-xs">54 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Rave">
                  <Sidebar.ItemButton>
                    <img src="/albumcover3.jpg" />
                    <div>
                      <p>Rave</p>
                      <p className="text-(--gray-11)! text-xs">2 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
                <Sidebar.Item tooltip="Pure sound">
                  <Sidebar.ItemButton>
                    <img src="/albumcover1.jpg" />
                    <div>
                      <p>Pure sound</p>
                      <p className="text-(--gray-11)! text-xs">13 items</p>
                    </div>
                  </Sidebar.ItemButton>
                </Sidebar.Item>
              </Sidebar.List>
            </Sidebar.Group>
          </Sidebar.Content>

          <Sidebar.Footer>
            <Sidebar.Item tooltip="Account">
              <Menu.Root>
                <Menu.Trigger
                  render={
                    <Sidebar.ItemButton>
                      <div className="flex w-full items-center gap-2">
                        <img src="/albumcover3.jpg" width="36" height="36" />

                        <div className="hidden flex-1 items-center overflow-hidden lg:grid">
                          <p className="max-w-[100px] truncate text-left text-sm text-(--gray-12)">Username</p>
                          <p className="line-clamp-1 text-left text-xs text-(--gray-11)">user@email.com</p>
                        </div>

                        <ChevronsUpDownIcon
                          size={16}
                          className="hidden text-(--gray-11) transition-[rotate,color] group-hover:text-(--gray-12) lg:block"
                        />
                      </div>
                    </Sidebar.ItemButton>
                  }
                />
                <Menu.Popup side="top" className="w-(--anchor-width) min-w-[200px]">
                  <Menu.Item>
                    <SettingsIcon />
                    Account settings
                  </Menu.Item>
                  <Menu.Item>
                    <LogOutIcon />
                    Log out
                  </Menu.Item>
                </Menu.Popup>
              </Menu.Root>
            </Sidebar.Item>
          </Sidebar.Footer>
        </Sidebar.Root>
      </div>
    );
  },
};
