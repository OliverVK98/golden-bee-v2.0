import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { DeliveryForm } from "@/components/CheckoutPageLayout/components/DeliveryForm";

export const CreditCardForm = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Stack>
      <Text text="Payment" bold size={TextSize.M} />
      <TextField label="Card Number" margin="normal" />
      <Stack direction="row" gap="10px">
        <TextField
          label="Expiration date (MM / YY)"
          fullWidth
          margin="normal"
        />
        <TextField label="Security Code" fullWidth margin="normal" />
      </Stack>
      <TextField label="Name on card" margin="normal" />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleChange} name="email" />
          }
          label="Use shipping address as billing address"
        />
      </FormGroup>
      <Collapse in={!checked}>
        <DeliveryForm title="Billing Address" />
      </Collapse>
    </Stack>
  );
};
