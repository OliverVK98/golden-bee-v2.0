import { Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";

interface PriceTagProps {
  price: number;
  discountedPrice?: number;
  size?: TextSize;
}

export const PriceTag = (props: PriceTagProps) => {
  const { discountedPrice, price, size = TextSize.XS } = props;

  return (
    <Stack direction="row" gap="4px" justifyContent="center">
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
