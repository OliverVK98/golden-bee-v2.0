import { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { Product } from "@/types/types";
import { MultiProductDisplay } from "@/components/ProductPageLayout/components/MultiProductDisplay";

interface ProductPageLayoutProps {
  title: string;
  productsToDisplay: Product[];
}

export const ProductPageLayout = (props: ProductPageLayoutProps) => {
  const { title, productsToDisplay } = props;

  // State for the current page
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calculate the number of pages
  const pageCount = Math.ceil(productsToDisplay.length / productsPerPage);

  // Get the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsToDisplay.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

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
