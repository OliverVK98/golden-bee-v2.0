"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { Menu as MaterialMenu, MenuItem, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { itemCollectionURLMapper } from "@/const";

interface MenuProps {
  dropdownList: string[];
  title: string;
}

export const Menu = ({ dropdownList, title }: MenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menuListItem: string) => {
    setAnchorEl(null);
    router.push(
      itemCollectionURLMapper[
        menuListItem as keyof typeof itemCollectionURLMapper
      ],
    );
  };

  return (
    <Stack>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ padding: 0 }}
      >
        <Text text={title} size={TextSize.S} />
      </Button>
      <MaterialMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ padding: 0 }}
      >
        {dropdownList?.map((item, index) => (
          <MenuItem
            key={index}
            sx={{ width: "100%", bgcolor: "background.default" }}
            onClick={() => handleMenuClick(item)}
          >
            <Text text={item} />
          </MenuItem>
        ))}
      </MaterialMenu>
    </Stack>
  );
};
