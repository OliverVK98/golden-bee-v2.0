import { testProduct } from "@/types/types";
import { SingleProductPageLayout } from "@/components/SingleProductPageLayout";

export default function Page({ params }: { params: { id: string } }) {
  return <SingleProductPageLayout product={testProduct} />;
}
