"use client";
import { Stack } from "@mui/material";
import { Product } from "@/types/types";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { StarRating } from "@/components/shared/StarRating/StarRating";
import { PriceTag } from "@/components/shared/PriceTag/PriceTag";
import { ProductQuantityInput } from "@/components/SingleProductPageLayout/components/ProductQuantityInput";
import { Button, ButtonWidth } from "@/components/shared/Button/Button";
import { PaymentMethods } from "@/components/SingleProductPageLayout/components/PaymentMethods";
import { BundleDetails } from "@/components/SingleProductPageLayout/components/BundleDetails";

interface ProductDetailsSectionProps {
  product: Product;
}

export const ProductDetailsSection = (props: ProductDetailsSectionProps) => {
  const { product } = props;

  return (
    <Stack direction="column" gap="20px" sx={{ marginTop: "20px" }}>
      <Stack
        sx={{
          width: "470px",
          borderBottom: "1px solid #F2F2F2",
          paddingBottom: "20px",
        }}
        direction="column"
        alignItems="center"
        gap="10px"
      >
        <Text text={product.name} size={TextSize.M} bold />
        {product.rating && <StarRating rating={product.rating}/>}
        <PriceTag
          price={product.price}
          discountedPrice={product.discountedPrice}
          size={TextSize.S}
        />
      </Stack>
      <Stack direction="column" gap="20px">
        <Text text="Quantity" size={TextSize.XS} />
        <ProductQuantityInput />
        <Button text="ADD TO CART" width={ButtonWidth.FULL} />
        <PaymentMethods />
        {product.bundle && <BundleDetails bundle={product.bundle}/>}
      </Stack>
    </Stack>
  );
};
