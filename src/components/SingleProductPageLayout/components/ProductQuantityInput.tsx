"use client";

import { ChangeEvent, FocusEvent, Dispatch, SetStateAction } from "react";
import { IconButton, Input, InputAdornment } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface ProductQuantityInputProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

export const ProductQuantityInput = (props: ProductQuantityInputProps) => {
  const { quantity, setQuantity } = props;

  const onAddQuantityButtonClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const onRemoveQuantityButtonClick = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const onUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(+e.target.value)) setQuantity(+e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setQuantity(1);
    }
  };

  return (
    <Input
      disableUnderline
      value={quantity}
      onBlur={handleBlur}
      onChange={onUserChange}
      inputProps={{
        min: 1,
        style: { textAlign: "center" },
        pattern: "\\d*",
      }}
      startAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="remove"
            onClick={onRemoveQuantityButtonClick}
            disabled={quantity <= 1}
          >
            <RemoveIcon />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="start">
          <IconButton aria-label="add" onClick={onAddQuantityButtonClick}>
            <AddIcon />
          </IconButton>
        </InputAdornment>
      }
      sx={{
        height: "40px",
        width: "100%",
        bgcolor: "info.main",
      }}
    />
  );
};
