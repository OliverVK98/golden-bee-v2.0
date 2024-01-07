"use client";

import { Button as MaterialButton, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { Text } from "@/components/shared/Text/Text";

type ButtonType = "submit" | "button" | "reset";

export enum ButtonWidth {
  SMALL = "115px",
  MEDIUM = "170px",
  LARGE = "200px",
  // XLARGE = "250px",
  FULL = "100%",
}

interface ButtonProps {
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void);
  width?: ButtonWidth;
  text: string;
  sx?: SxProps<Theme>;
  isInverted?: boolean;
  disabled?: boolean;
  type?: ButtonType;
}
export const Button = (props: ButtonProps) => {
  const {
    onClick,
    text,
    width = ButtonWidth.SMALL,
    sx,
    isInverted,
    disabled,
    type = "button",
  } = props;

  return (
    <MaterialButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      sx={{
        padding: 0,
        width,
        height: "50px",
        borderRadius: "5px",
        cursor: "pointer",
        border: "1px solid",
        color: isInverted ? "background.paper" : "background.default",
        borderColor: "background.paper",
        backgroundColor: isInverted ? "background.default" : "background.paper",
        "&:hover": {
          backgroundColor: "background.paper",
          opacity: 0.8,
          color: "background.default",
        },
        ...sx,
      }}
    >
      <Text text={text} sx={{ color: "inherit" }} />
    </MaterialButton>
  );
};
