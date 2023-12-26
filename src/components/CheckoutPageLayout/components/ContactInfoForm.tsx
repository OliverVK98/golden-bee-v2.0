import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Text, TextSize } from "@/components/shared/Text/Text";

export const ContactInfoForm = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Stack>
      <Text text="Contact Information" bold size={TextSize.M} />
      <TextField label="Email" fullWidth margin="normal" />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleChange} name="email" />
          }
          label="Email me with news and offers"
        />
      </FormGroup>
    </Stack>
  );
};
