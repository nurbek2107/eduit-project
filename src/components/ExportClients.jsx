"use client";

import { ThemeProvider, Button } from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import {
    Avatar,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
        href: '/'
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
        href: '/'
    },
];

export function AvatarWithUserDropdown() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="#ff9500"
            className="flex items-center rounded-full  p-0"
          >
            <Avatar
              variant="circular"
              size="md"
              alt="tania andrew"
              withBorder={true}
              color="#ff9500"
              className=" p-0.5 border-[#ff9500]"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, href }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <Link key={label} href={href} passHref>
                <MenuItem
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    );
}

export { ThemeProvider, Button };
