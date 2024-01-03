"use client";

import { Stack } from "@mui/material";
import Error from "next/error";
import { Product } from "@/types/types";
import { ProductDetailsSection } from "@/components/SingleProductPageLayout/components/ProductDetailsSection";
import { ImageCarousel } from "@/components/SingleProductPageLayout/components/ImageCarousel";
import { AdditionalProductImages } from "@/components/SingleProductPageLayout/components/AdditionalProductImages";
import { UserSubscription } from "@/components/shared/UserSubscription/UserSubscription";
import { SingleImageLayout } from "@/components/SingleProductPageLayout/components/SingleImageLayout";
import { ItemSection } from "@/components/shared/ItemSection/ItemSection";

interface SingleProductPageLayoutProps {
  product: Product;
}

export const SingleProductPageLayout = (
  props: SingleProductPageLayoutProps,
) => {
  const { product } = props;

  if (!product) return <Error statusCode={404} />;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "60px" }}
      gap="50px"
    >
      <Stack direction="row" gap="20px">
        {product.imgUrl?.length > 1 ? (
          <ImageCarousel images={product.imgUrl} />
        ) : (
          <SingleImageLayout imgSrc={product.imgUrl[0]} />
        )}
        <ProductDetailsSection product={product} />
      </Stack>
      {product.additionalInfo && (
        <AdditionalProductImages additionalInfo={product.additionalInfo} />
      )}
      <ItemSection title="You may also like" hideButton invertedStyle />
      <UserSubscription
        title="SUBSCRIBE FOR A CHANCE TO WIN A $100 GIFT CARD"
        sx={{ width: "100vw", height: "200px" }}
        isInvertedColor
      />
    </Stack>
  );
};
