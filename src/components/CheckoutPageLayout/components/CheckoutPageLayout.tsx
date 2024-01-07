"use client";

import { Stack } from "@mui/material";
import React from "react";
import { CheckoutPageInfoSection } from "@/components/CheckoutPageLayout/components/CheckoutPageInfoSection";
import { CheckoutPageProductSection } from "@/components/CheckoutPageLayout/components/CheckoutPageProductSection";

export const CheckoutPageLayout = () => (
  <Stack direction="row" width="100%" sx={{ borderTop: "1px solid #D7D7D7" }}>
    <CheckoutPageInfoSection />
    <CheckoutPageProductSection />
  </Stack>
);
