"use client";

import { Stack } from "@mui/material";
import { DeliveryForm } from "@/components/CheckoutPageLayout/components/DeliveryForm";
import { CreditCardForm } from "@/components/CheckoutPageLayout/components/CreditCardForm";
import { Button } from "@/components/shared/Button/Button";
import { ContactInfoForm } from "@/components/CheckoutPageLayout/components/ContactInfoForm";

export const CheckoutPageInfoSection = () => (
  <Stack
    width="50%"
    sx={{ bgcolor: "background.default", marginBottom: "21px" }}
    alignItems="flex-end"
    gap="30px"
  >
    <Stack width="650px" sx={{ padding: "21px" }} gap="30px">
      <ContactInfoForm />
      <DeliveryForm title="Contact and Shipping Information" />
      <CreditCardForm />
    </Stack>
    <Button
      text="Pay now"
      sx={{ width: "650px", height: "65px", mx: "21px" }}
    />
  </Stack>
);
