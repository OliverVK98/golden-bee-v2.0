"use client";

import { Badge, Stack } from "@mui/material";
import { CartProduct } from "@/types/types";
import { Image } from "@/components/shared/Image/Image";
import { Text, TextSize } from "@/components/shared/Text/Text";

interface CheckoutProductCardProps {
  product: CartProduct;
}

export const CheckoutProductCard = (props: CheckoutProductCardProps) => {
  const { product } = props;

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" gap="10px" alignItems="center">
        <Stack position="relative">
          <Badge
            badgeContent={product.quantity}
            color="primary"
            sx={{ opacity: "0.7" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Image
              src={product.imgUrl[0]}
              alt="cart-product"
              width={64}
              height={64}
            />
          </Badge>
        </Stack>
        <Text text={product.name} size={TextSize.XS} />
      </Stack>
      <Text
        text={`$${
          (product.discountedPrice || product.price) * product.quantity
        }`}
        size={TextSize.XS}
      />
    </Stack>
  );
};
