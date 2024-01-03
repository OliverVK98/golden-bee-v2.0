import { useState } from "react";
import { Pagination, Skeleton, Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { MultiProductDisplay } from "@/components/ProductPageLayout/components/MultiProductDisplay";
import { useGetCollectionProducts } from "@/components/ProductPageLayout/api/productApi";

interface ProductPageLayoutProps {
  title: string;
  url: string;
}

export const ProductPageLayout = (props: ProductPageLayoutProps) => {
  const { title, url } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetCollectionProducts(url.toLowerCase());

  if (isLoading)
    return (
      <Stack
        alignItems="center"
        direction="column"
        gap="20px"
        sx={{
          marginTop: "20px",
          minHeight: "88vh",
          marginBottom: "20px",
          flex: "1",
        }}
      >
        <Text text={title} size={TextSize.L} sx={{ fontWeight: "bold" }} />
        <MultiProductDisplay isLoading={isLoading} />
        <Skeleton width={150} height={30} />
      </Stack>
    );

  const productsPerPage = 9;
  const pageCount = Math.ceil(data!.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      alignItems="center"
      direction="column"
      gap="20px"
      sx={{
        marginTop: "20px",
        minHeight: "88vh",
        marginBottom: "20px",
        flex: "1",
      }}
    >
      <Text text={title} size={TextSize.L} sx={{ fontWeight: "bold" }} />
      <MultiProductDisplay products={currentProducts} />
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        color="primary"
        sx={{ marginTop: "auto" }}
      />
    </Stack>
  );
};
