"use client";

import { Stack } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { DeliveryForm } from "@/components/CheckoutPageLayout/components/DeliveryForm";
import { CreditCardForm } from "@/components/CheckoutPageLayout/components/CreditCardForm";
import { Button } from "@/components/shared/Button/Button";
import { ContactInfoForm } from "@/components/CheckoutPageLayout/components/ContactInfoForm";
import { Order, OrderForm } from "@/types/types";
import {
  defaultOrderFormValues,
  orderFormValidationSchema,
} from "@/components/CheckoutPageLayout/validation";
import { useSubmitOrder } from "@/components/CheckoutPageLayout/api/orderApi";
import { useCartContext } from "@/context";

export const CheckoutPageInfoSection = () => {
  const methods = useForm<OrderForm>({
    resolver: yupResolver(orderFormValidationSchema) as any,
    defaultValues: defaultOrderFormValues,
    mode: "onBlur",
  });
  const [submitOrder, { isLoading }] = useSubmitOrder();
  const { clearCart, cartProducts } = useCartContext();
  const router = useRouter();

  const onSubmit: SubmitHandler<OrderForm> = async (formData) => {
    const orderItemsString = cartProducts.reduce((acc, item, index) => {
      const itemString = `${item.id}:${item.quantity}`;
      return index === 0 ? itemString : `${acc}|${itemString}`;
    }, "");

    const orderData: Order = {
      email: formData.email,
      sendOffers: formData.sendOffers,
      shippingAddress: formData.shippingAddress,
      shippingBillingIsSame: formData.shippingBillingIsSame,
      billingAddress: formData.shippingBillingIsSame
        ? null
        : formData.billingAddress,
      firstName: formData.shippingBillingIsSame
        ? formData.shippingAddress.shippingFirstName
        : formData.billingAddress.billingFirstName,
      lastName: formData.shippingBillingIsSame
        ? formData.shippingAddress.shippingLastName
        : formData.billingAddress.billingLastName,
      orderData: orderItemsString,
    };

    await submitOrder(orderData);
    router.push("/");
    clearCart();
  };

  return (
    <Stack
      width="50%"
      sx={{ bgcolor: "background.default", marginBottom: "21px" }}
      alignItems="flex-end"
      gap="30px"
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack width="650px" sx={{ padding: "21px" }} gap="30px">
            <ContactInfoForm />
            <DeliveryForm title="Contact and Shipping Information" />
            <CreditCardForm />
          </Stack>
          <Button
            type="submit"
            text="Pay now"
            disabled={isLoading}
            sx={{ width: "650px", height: "65px", mx: "21px" }}
          />
        </form>
      </FormProvider>
    </Stack>
  );
};
