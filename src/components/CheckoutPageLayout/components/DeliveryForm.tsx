"use client";

import { Stack, TextField } from "@mui/material";
import React from "react";
import { FieldErrorsImpl, useFormContext } from "react-hook-form";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { OrderForm } from "@/types/types";

export interface DeliveryFormProps {
  title: string;
  isBillingForm?: boolean;
}

export const DeliveryForm = (props: DeliveryFormProps) => {
  const { title, isBillingForm } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const formErrors = errors as FieldErrorsImpl<OrderForm>;

  return (
    <Stack>
      <Text text={title} bold size={TextSize.M} />
      <Stack direction="row" gap="10px">
        <TextField
          label="First Name"
          fullWidth
          margin="normal"
          {...(isBillingForm
            ? register("billingAddress.billingFirstName")
            : register("shippingAddress.shippingFirstName"))}
          error={
            isBillingForm
              ? !!formErrors.billingAddress?.billingFirstName
              : !!formErrors.shippingAddress?.shippingFirstName
          }
          helperText={
            isBillingForm
              ? formErrors.billingAddress?.billingFirstName?.message
              : formErrors.shippingAddress?.shippingFirstName?.message
          }
        />
        <TextField
          label="Last Name"
          fullWidth
          margin="normal"
          {...(isBillingForm
            ? register("billingAddress.billingLastName")
            : register("shippingAddress.shippingLastName"))}
          error={
            isBillingForm
              ? !!formErrors.billingAddress?.billingLastName
              : !!formErrors.shippingAddress?.shippingLastName
          }
          helperText={
            isBillingForm
              ? formErrors.billingAddress?.billingLastName?.message
              : formErrors.shippingAddress?.shippingLastName?.message
          }
        />
      </Stack>
      <Stack direction="row" gap="10px">
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          {...(isBillingForm
            ? register("billingAddress.billingAddress")
            : register("shippingAddress.shippingAddress"))}
          error={
            isBillingForm
              ? !!formErrors.billingAddress?.billingAddress
              : !!formErrors.shippingAddress?.shippingAddress
          }
          helperText={
            isBillingForm
              ? formErrors.billingAddress?.billingAddress?.message
              : formErrors.shippingAddress?.shippingAddress?.message
          }
        />
        <TextField
          label="City"
          fullWidth
          margin="normal"
          {...(isBillingForm
            ? register("billingAddress.billingCity")
            : register("shippingAddress.shippingCity"))}
          error={
            isBillingForm
              ? !!formErrors.billingAddress?.billingCity
              : !!formErrors.shippingAddress?.shippingCity
          }
          helperText={
            isBillingForm
              ? formErrors.billingAddress?.billingCity?.message
              : formErrors.shippingAddress?.shippingCity?.message
          }
        />
        <TextField
          label="State"
          fullWidth
          margin="normal"
          {...(isBillingForm
            ? register("billingAddress.billingState")
            : register("shippingAddress.shippingState"))}
          error={
            isBillingForm
              ? !!formErrors.billingAddress?.billingState
              : !!formErrors.shippingAddress?.shippingState
          }
          helperText={
            isBillingForm
              ? formErrors.billingAddress?.billingState?.message
              : formErrors.shippingAddress?.shippingState?.message
          }
        />
      </Stack>
      <TextField
        label="Zip Code"
        fullWidth
        margin="normal"
        {...(isBillingForm
          ? register("billingAddress.billingZipCode")
          : register("shippingAddress.shippingZipCode"))}
        error={
          isBillingForm
            ? !!formErrors.billingAddress?.billingZipCode
            : !!formErrors.shippingAddress?.shippingZipCode
        }
        helperText={
          isBillingForm
            ? formErrors.billingAddress?.billingZipCode?.message
            : formErrors.shippingAddress?.shippingZipCode?.message
        }
      />
      <TextField
        label="Phone (optional)"
        fullWidth
        margin="normal"
        {...(isBillingForm
          ? register("billingAddress.billingPhone")
          : register("shippingAddress.shippingPhone"))}
        error={
          isBillingForm
            ? !!formErrors.billingAddress?.billingPhone
            : !!formErrors.shippingAddress?.shippingPhone
        }
        helperText={
          isBillingForm
            ? formErrors.billingAddress?.billingPhone?.message
            : formErrors.shippingAddress?.shippingPhone?.message
        }
      />
    </Stack>
  );
};
