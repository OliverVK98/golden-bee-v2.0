"use client";

import { ProductPageLayout } from "@/components/ProductPageLayout";
import { testProducts } from "@/types/types";

export default function Necklaces() {
  return (
    <ProductPageLayout title="Necklaces" productsToDisplay={testProducts} />
  );
}
