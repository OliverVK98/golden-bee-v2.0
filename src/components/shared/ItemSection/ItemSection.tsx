"use client";

import { Stack, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { Product, testProduct } from "@/types/types";
import { ProductCard } from "@/components/shared/ItemSection/ProductCard";
import { Button, ButtonWidth } from "@/components/shared/Button/Button";
import { Text, TextSize } from "@/components/shared/Text/Text";

interface ItemSectionProps {
  products?: Product[];
  title: string;
  hideButton?: boolean;
  invertedStyle?: boolean;
}

export const ItemSection = (props: ItemSectionProps) => {
  const { products, title, hideButton = false, invertedStyle = false } = props;

  const styles: SxProps<Theme> = invertedStyle
    ? { bgcolor: "accent.main" }
    : {};

  return (
    <Stack
      direction="column"
      gap="15px"
      sx={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}
      alignItems="center"
    >
      <Text text={title} bold size={TextSize.M} sx={styles} />
      <Stack direction="row" gap="16px">
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
      </Stack>
      {!hideButton && <Button text="View all" width={ButtonWidth.SMALL} />}
    </Stack>
  );
};
