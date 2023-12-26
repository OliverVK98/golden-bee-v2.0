"use client";

import { Stack } from "@mui/material";
import { Product, testImages, testProduct } from "@/types/types";
import { ProductDetailsSection } from "@/components/SingleProductPageLayout/components/ProductDetailsSection";
import { ImageCarousel } from "@/components/SingleProductPageLayout/components/ImageCarousel";
import { AdditionalProductImages } from "@/components/SingleProductPageLayout/components/AdditionalProductImages";
import { ItemSection } from "@/components/shared/ItemSection/ItemSection";
import { UserSubscription } from "@/components/shared/UserSubscription/UserSubscription";

interface SingleProductPageLayoutProps {
  product: Product;
}
export const SingleProductPageLayout = (
  props: SingleProductPageLayoutProps,
) => {
  const { product } = props;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "60px" }}
      gap="50px"
    >
      <Stack direction="row" gap="20px">
        <ImageCarousel images={testImages} />
        <ProductDetailsSection product={testProduct} />
      </Stack>
      <AdditionalProductImages additionalInfo={testProduct.additionalInfo} />
      <ItemSection title="You may also like" hideButton invertedStyle />
      <UserSubscription
        title="SUBSCRIBE FOR A CHANCE TO WIN A $100 GIFT CARD"
        sx={{ width: "100vw", height: "200px" }}
        isInvertedColor
      />
    </Stack>
  );
};
