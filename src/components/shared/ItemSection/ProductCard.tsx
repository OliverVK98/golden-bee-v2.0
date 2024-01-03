import { Box, Skeleton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";
import { Button } from "@/components/shared/Button/Button";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { StarRating } from "@/components/shared/StarRating/StarRating";
import { PriceTag } from "@/components/shared/PriceTag/PriceTag";
import { Image } from "@/components/shared/Image/Image";
import { useCartContext } from "@/context";

interface ProductCardProps {
  product?: Product;
  priority?: boolean;
  isLoading?: boolean;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product, priority, isLoading } = props;
  const router = useRouter();
  const { addProduct } = useCartContext();

  const onProductClick = () => {
    router.push(`/items/${product!.id}`);
  };

  if (isLoading)
    return (
      <Stack
        sx={{ width: "250px", height: "400px" }}
        gap="5px"
        alignItems="center"
      >
        <Skeleton sx={{ height: "250px", width: "250px " }} />
        <Button
          isInverted
          text="Add to cart"
          sx={{ width: "250px", height: "45px" }}
        />
        <Skeleton width={250} height={24} />
        <Skeleton width={250} height={24} />
        <Skeleton width={250} height={24} />
      </Stack>
    );

  return (
    <Stack
      sx={{ width: "250px", height: "400px" }}
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
            src={product!.imgUrl[0]}
            alt="product-img"
            width={250}
            height={250}
            clickable
            onClick={onProductClick}
            priority={priority}
          />
        </div>
      </Box>
      <Button
        isInverted
        text="Add to cart"
        sx={{ width: "250px", height: "45px" }}
        onClick={() => addProduct(product!)}
      />
      <Text
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: "center",
          width: "250px",
        }}
        text={product!.name}
        clickable
        onClick={onProductClick}
        size={TextSize.XS}
        bold
      />
      <StarRating rating={product!.rating} onClick={onProductClick} />
      <PriceTag
        price={product!.price}
        discountedPrice={product!.discountedPrice}
      />
    </Stack>
  );
};
