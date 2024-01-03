"use client";

import { Divider, Stack } from "@mui/material";
import { CheckoutProductCard } from "@/components/CheckoutPageLayout/components/CheckoutProductCard";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { useCartContext } from "@/context";

export const CheckoutPageProductSection = () => {
  const { cartProducts } = useCartContext();
  const currentCartTotal = cartProducts.reduce((total: number, product) => {
    const effectivePrice = product.discountedPrice ?? product.price;
    return total + effectivePrice * product.quantity;
  }, 0);

  return (
    <Stack
      width="50%"
      sx={{
        bgcolor: "#F7F7F7",
        borderLeft: "1px solid #D7D7D7",
        padding: "21px",
      }}
    >
      <Stack width="455px" gap="10px">
        {cartProducts.map((product, index) => (
          <CheckoutProductCard product={product} key={index} />
        ))}
        <Divider />
        <Stack gap="5px">
          <Stack direction="row" justifyContent="space-between">
            <Text text="Subtotal: " size={TextSize.XS} />
            <Text
              text={`$${currentCartTotal.toFixed(2).toString()}`}
              size={TextSize.XS}
            />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Text text="Shipping:" size={TextSize.XS} />
            <Text text="Free" size={TextSize.XS} />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Text text="Total:" />
            <Text text={`$${currentCartTotal.toFixed(2).toString()}`} bold />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
