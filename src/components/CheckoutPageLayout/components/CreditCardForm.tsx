import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { DeliveryForm } from "@/components/CheckoutPageLayout/components/DeliveryForm";

export const CreditCardForm = () => {
  const { register, watch, setValue } = useFormContext();
  const shippingBillingIsSame = watch("shippingBillingIsSame");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setValue("shippingBillingIsSame", value);
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
            <Checkbox
              {...register("shippingBillingIsSame", { onChange: handleChange })}
              checked={shippingBillingIsSame}
            />
          }
          label="Use shipping address as billing address"
        />
      </FormGroup>
      <Collapse in={!shippingBillingIsSame}>
        <DeliveryForm title="Billing Address" isBillingForm />
      </Collapse>
    </Stack>
  );
};
