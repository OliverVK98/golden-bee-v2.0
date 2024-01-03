"use client";

import Error from "next/error";
import { ProductPageLayout } from "@/components/ProductPageLayout";

const AllowedCollectionsURLs = [
  "necklaces",
  "rings",
  "bracelets",
  "earrings",
  "bundles",
  "gift_cards",
  "sunflowers",
  "daisies",
  "bees",
  "bracelets_with_notes",
  "accessories",
] as const;
type AllowedCollection = (typeof AllowedCollectionsURLs)[number];
const blobToTitleMapper: Record<AllowedCollection, string> = {
  bees: "Bees",
  necklaces: "Necklaces",
  rings: "Rings",
  bracelets: "Bracelets",
  earrings: "Earrings",
  bundles: "Bundles",
  gift_cards: "Gift Cards",
  sunflowers: "Sunflowers",
  daisies: "Daisies",
  bracelets_with_notes: "Bracelets with Notes",
  accessories: "Accessories",
};

const isURLInAllowedCollections = (blob: string) =>
  AllowedCollectionsURLs.some(
    (allowedBlob) => allowedBlob.toLowerCase() === blob.toLowerCase(),
  );

export default function Page({
  params: { blob },
}: {
  params: { blob: string };
}) {
  const isValidCollection = isURLInAllowedCollections(blob);

  if (!isValidCollection) return <Error statusCode={404} />;

  const title = blobToTitleMapper[blob as AllowedCollection];

  return <ProductPageLayout title={title} url={blob} />;
}
