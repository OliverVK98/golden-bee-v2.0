"use client";

import React from "react";
import dynamic from "next/dynamic";

const CheckoutPageLayout = dynamic(
  () =>
    import("@/components/CheckoutPageLayout").then(
      (mod) => mod.CheckoutPageLayout,
    ),
  { loading: () => <p>Loading...</p> },
);

const CheckoutPage = () => <CheckoutPageLayout />;
export default CheckoutPage;
