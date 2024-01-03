"use client";

import { Stack, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/shared/ItemSection/ProductCard";
import { Button, ButtonWidth } from "@/components/shared/Button/Button";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { useGetTrendingProducts } from "@/components/shared/ItemSection/api/trendingProductsApi";

interface ItemSectionProps {
  title: string;
  hideButton?: boolean;
  invertedStyle?: boolean;
  priority?: boolean;
}

export const ItemSection = (props: ItemSectionProps) => {
  const {
    title,
    hideButton = false,
    invertedStyle = false,
    priority = false,
  } = props;
  const { isLoading, data } = useGetTrendingProducts();
  const router = useRouter();

  const onButtonClick = () => router.push("/all");

  const styles: SxProps<Theme> = invertedStyle
    ? { bgcolor: "accent.main" }
    : {};

  if (isLoading)
    return (
      <Stack
        direction="column"
        gap="15px"
        sx={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}
        alignItems="center"
      >
        <Text text={title} bold size={TextSize.M} sx={styles} />
        <Stack direction="row" gap="16px">
          {Array.from({ length: 4 }).map((_, index) => (
            <Fragment key={index}>
              <ProductCard isLoading={isLoading} />
            </Fragment>
          ))}
        </Stack>
        {!hideButton && <Button text="View all" width={ButtonWidth.SMALL} />}
      </Stack>
    );

  return (
    <Stack
      direction="column"
      gap="15px"
      sx={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}
      alignItems="center"
    >
      <Text text={title} bold size={TextSize.M} sx={styles} />
      <Stack direction="row" gap="16px">
        {data!.map((product, index) => (
          <Fragment key={index}>
            <ProductCard product={product} priority={priority} />
          </Fragment>
        ))}
      </Stack>
      {!hideButton && (
        <Button
          text="View all"
          width={ButtonWidth.SMALL}
          onClick={onButtonClick}
        />
      )}
    </Stack>
  );
};
