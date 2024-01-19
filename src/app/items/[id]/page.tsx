import { Product } from "@/types/types";
import { SingleProductPageLayout } from "@/components/SingleProductPageLayout";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/items/${id}`);

  return res.json();
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const product: Product = (await getProduct(id))[0];

  return <SingleProductPageLayout product={product} />;
}
