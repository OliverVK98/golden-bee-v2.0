import { Stack } from "@mui/material";
import { Product } from "@/types/types";
import { ProductCard } from "@/components/shared/ItemSection/ProductCard";

interface MultiProductDisplayProps {
  products?: Product[];
  isLoading?: boolean;
}

export const MultiProductDisplay = (props: MultiProductDisplayProps) => {
  const { products, isLoading } = props;

  if(isLoading) return (
    <Stack direction="column" gap="32px">
      <Stack direction="row" gap="32px" sx={{ minWidth: " 814px" }}>
        {Array.from({ length: 3 }, (_, index) => (
          <ProductCard key={index} isLoading={isLoading} />
        ))}
      </Stack>
      <Stack direction="row" gap="32px">
        {Array.from({ length: 3 }, (_, index) => (
          <ProductCard key={index} isLoading={isLoading} />
        ))}
      </Stack>
      <Stack direction="row" gap="32px">
        {Array.from({ length: 3 }, (_, index) => (
          <ProductCard key={index} isLoading={isLoading} />
        ))}
      </Stack>
    </Stack>
  )

  return (
    <Stack direction="column" gap="32px">
      <Stack direction="row" gap="32px" sx={{ minWidth: " 814px" }}>
        {products?.slice(0, 3).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
      <Stack direction="row" gap="32px">
        {products?.slice(3, 6).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
      <Stack direction="row" gap="32px">
        {products?.slice(6, 9).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack>
    </Stack>
  );
};
