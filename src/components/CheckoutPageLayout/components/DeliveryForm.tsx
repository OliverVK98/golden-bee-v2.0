import { Stack, TextField } from "@mui/material";
import React from "react";
import { Text, TextSize } from "@/components/shared/Text/Text";

export interface DeliveryFormProps {
  title: string;
}

export const DeliveryForm = (props: DeliveryFormProps) => {
  const { title } = props;

  return (
    <Stack>
      <Text text={title} bold size={TextSize.M} />
      <Stack direction="row" gap="10px">
        <TextField label="First Name" fullWidth margin="normal" />
        <TextField label="Last Name" fullWidth margin="normal" />
      </Stack>
      <Stack direction="row" gap="10px">
        <TextField label="Address" fullWidth margin="normal" />
        <TextField label="City" fullWidth margin="normal" />
        <TextField label="State" fullWidth margin="normal" />
      </Stack>
      <TextField label="Zip Code" fullWidth margin="normal" />
      <TextField label="Phone (optional)" fullWidth margin="normal" />
    </Stack>
  );
};
