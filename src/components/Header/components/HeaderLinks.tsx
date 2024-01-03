import React from "react";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { Menu } from "@/components/shared/Menu/Menu";
import { CollectionType, ItemType } from "@/const";
import { Image } from "@/components/shared/Image/Image";

export const HeaderLinks = () => {
  const router = useRouter();
  const onHomeClick = () => {
    router.push("/");
  };

  return (
    <Stack direction="row" gap="7px" alignItems="center">
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={150}
        height={150}
        clickable
        onClick={onHomeClick}
        sx={{ marginLeft: "-30px" }}
      />
      <Text text="Home" size={TextSize.S} clickable onClick={onHomeClick} />
      <Menu title="Shop" dropdownList={Object.values(ItemType)} />
      <Menu title="Collections" dropdownList={Object.values(CollectionType)} />
    </Stack>
  );
};
