"use client";

import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";

export enum TextSize {
  XS = "16px",
  S = "20px",
  M = "28px",
  L = "36px",
}

interface BaseTextProps {
  text: string;
  size?: TextSize;
  invertedColor?: boolean;
  sx?: SxProps<Theme>;
  bold?: boolean;
}

interface ClickableTextProps extends BaseTextProps {
  clickable: true;
  onClick: () => void;
}

interface NonClickableTextProps extends BaseTextProps {
  clickable?: false;
}

type TextProps = ClickableTextProps | NonClickableTextProps;

export const Text = (props: TextProps) => {
  const {
    text,
    sx,
    invertedColor,
    size = TextSize.S,
    clickable,
    bold = false,
    ...otherProps
  } = props;

  if (clickable) {
    return (
      <Typography
        sx={{
          padding: 0,
          fontSize: size,
          color: invertedColor ? "background.default" : "primary.main",
          textTransform: "none",
          cursor: "pointer",
          fontWeight: bold ? "bold" : "",
          ...sx,
        }}
        {...otherProps}
      >
        {text}
      </Typography>
    );
  }

  return (
    <Typography
      sx={{
        padding: 0,
        fontSize: size,
        color: invertedColor ? "background.default" : "primary.main",
        textTransform: "none",
        fontWeight: bold ? "bold" : "",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};
