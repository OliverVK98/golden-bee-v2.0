"use client";

import NextImage from "next/legacy/image";
import { Stack, Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
interface StaticRequire {
  default: StaticImageData;
}
type StaticImport = StaticRequire | StaticImageData;
type SafeNumber = number | `${number}`;
interface BaseImageProps {
  priority?: boolean;
  isBorderActive?: boolean;
  src: string | StaticImport;
  width?: SafeNumber;
  height?: SafeNumber;
  alt: string;
  isLoading?: boolean;
  sx?: SxProps<Theme>;
}

interface ClickableImageProps extends BaseImageProps {
  clickable: true;
  onClick: () => void;
}

interface NonClickableImageProps extends BaseImageProps {
  clickable?: false;
}

type ImageProps = ClickableImageProps | NonClickableImageProps;

export const Image = (props: ImageProps) => {
  const {
    priority = false,
    isBorderActive = false,
    height,
    width,
    src,
    alt,
    isLoading,
    clickable,
    sx,
    ...otherProps
  } = props;

  if (isLoading) return null;

  if (!isBorderActive && !clickable) {
    return (
      <NextImage
        priority={priority}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    );
  }

  if (!isBorderActive && clickable) {
    return (
      <Stack sx={{ cursor: "pointer", ...sx }}>
        <NextImage
          priority={priority}
          src={src}
          alt={alt}
          height={height}
          width={width}
          {...otherProps}
        />
      </Stack>
    );
  }

  return (
    <Stack
      sx={{
        border: "5px solid #39A934",
        cursor: "pointer",
        boxSizing: "border-box",
        ...sx,
      }}
    >
      <NextImage
        priority={priority}
        src={src}
        alt={alt}
        height={height ? +height - 10 : undefined}
        width={width ? +width - 10 : undefined}
        quality={100}
        {...otherProps}
      />
    </Stack>
  );
};
