"use client";

import dynamic from "next/dynamic";

const ProductPageLayout = dynamic(
  () =>
    import("@/components/ProductPageLayout").then(
      (mod) => mod.ProductPageLayout,
    ),
  { loading: () => <p>Loading...</p> },
);

export default function Page() {
  return <ProductPageLayout title="All Items" url="all" />;
}
