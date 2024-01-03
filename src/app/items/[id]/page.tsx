import {Product} from "@/types/types";
import { SingleProductPageLayout } from "@/components/SingleProductPageLayout";

async function getProduct(id: string) {
  const res = await fetch("http://localhost:8080/api/items/" + id);

  return res.json();
}

export default async function Page({ params: {id} } : { params: { id: string } }) {
  const product: Product = (await getProduct(id))[0];

  return <SingleProductPageLayout product={product} />;
}
