"use client";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { FieldErrorsImpl, useFormContext } from "react-hook-form";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { OrderForm } from "@/types/types";

export const ContactInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const formErrors = errors as FieldErrorsImpl<OrderForm>;

  return (
    <Stack>
      <Text text="Contact Information" bold size={TextSize.M} />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email")}
        error={!!formErrors.email}
        helperText={formErrors.email?.message}
      />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...register("sendOffers")} />}
          label="Email me with news and offers"
        />
      </FormGroup>
    </Stack>
  );
};
