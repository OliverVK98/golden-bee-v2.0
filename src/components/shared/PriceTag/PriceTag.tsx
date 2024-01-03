"use client";

import { Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";

interface PriceTagProps {
  price: number;
  discountedPrice: number | null;
  size?: TextSize;
  onClick?: () => void;
}

export const PriceTag = (props: PriceTagProps) => {
  const { discountedPrice, price, size = TextSize.XS, onClick } = props;

  return (
    <Stack direction="row" gap="4px" justifyContent="center" onClick={onClick}>
      {discountedPrice && (
        <>
          <Text
            sx={{ textDecoration: "line-through" }}
            text={`$${price}`}
            size={size}
          />
          <Text
            text={`$${discountedPrice}`}
            size={size}
            sx={{ color: "background.paper", fontWeight: "600" }}
          />
        </>
      )}
      {!discountedPrice && <Text text={`$${price}`} size={size} />}
    </Stack>
  );
};
