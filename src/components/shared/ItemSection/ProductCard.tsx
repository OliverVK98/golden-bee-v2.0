import { Box, Stack } from "@mui/material";
import Image from "next/legacy/image";
import { Product } from "@/types/types";
import { Button } from "@/components/shared/Button/Button";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { StarRating } from "@/components/shared/StarRating/StarRating";
import { PriceTag } from "@/components/shared/PriceTag/PriceTag";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  return (
    <Stack
      sx={{ width: "250px", height: "360px" }}
      gap="5px"
      alignItems="center"
    >
      <Box
        sx={{
          overflow: "hidden",
          width: "250px",
          height: "250px",
          borderRadius: "10px",
          display: "inline-block",
          cursor: "pointer",
          "&:hover div": {
            transform: "scale(1.1)",
            opacity: 0.8,
          },
          "& div": {
            transition: "transform 0.3s ease-in-out",
            width: "100%",
            height: "100%",
            position: "relative",
          },
        }}
      >
        <div>
          <Image
            src={product.imgUrl}
            alt="product-img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Box>
      <Button
        isInverted
        text="Add to cart"
        sx={{ width: "250px", height: "45px" }}
      />
      <Text
        sx={{ fontWeight: "bold" }}
        text={product.name}
        clickable
        onClick={() => {}}
        size={TextSize.XS}
      />
      <StarRating rating={product.rating} />
      <PriceTag
        price={product.price}
        discountedPrice={product.discountedPrice}
      />
    </Stack>
  );
};
