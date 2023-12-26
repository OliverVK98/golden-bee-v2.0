import { Stack } from "@mui/material";
import Image from "next/legacy/image";

export const PaymentMethods = () => (
  <Stack direction="row" justifyContent="space-between">
    <Image
      src="/assets/payment-methods/amazon.svg"
      width={55}
      height={40}
      alt="payment-logo"
    />
    <Image
      src="/assets/payment-methods/amex.svg"
      width={55}
      height={40}
      alt="payment-logo"
    />
    <Image
      src="/assets/payment-methods/apple.svg"
      width={55}
      height={40}
      alt="payment-logo"
    />
    <Image
      src="/assets/payment-methods/mastercard.svg"
      width={55}
      height={40}
      alt="payment-logo"
    />
    <Image
      src="/assets/payment-methods/paypal.svg"
      width={55}
      height={40}
      alt="payment-logo"
    />
    <Image
      src="/assets/payment-methods/visa.svg"
      width={55}
      height={40}
      alt="payment-logo"
    />
  </Stack>
);
