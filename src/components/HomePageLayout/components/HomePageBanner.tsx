"use client";

import Image from "next/legacy/image";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { FRONT_IMAGE_URL, FRONT_IMAGE_URL_TWO } from "@/const";
import { RoundButton } from "@/components/HomePageLayout/components/RoundButton";
import { BannerAnimation } from "@/components/HomePageLayout/components/BannerAnimation";

function preloadImage(src: string) {
  const img = new window.Image();
  img.src = src;
}

export const HomePageBanner = () => {
  const [url, setUrl] = useState(FRONT_IMAGE_URL);
  const [key, setKey] = useState(1);

  useEffect(() => {
    preloadImage(FRONT_IMAGE_URL_TWO);
  }, []);

  const handleFirstButtonClick = () => {
    if (url === FRONT_IMAGE_URL) return;
    setUrl(FRONT_IMAGE_URL);
    setKey(Math.random());
  };

  const handleSecondButtonClick = () => {
    if (url === FRONT_IMAGE_URL_TWO) return;
    setUrl(FRONT_IMAGE_URL_TWO);
    setKey(Math.random());
  };

  return (
    <Stack
      sx={{ position: "relative", width: "100%", height: "500px" }}
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={url}
        alt="front-image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <BannerAnimation
        text={
          url === FRONT_IMAGE_URL ? "Share Your Love" : "Holiday Gift Guide"
        }
        key={key}
      />
      <Stack
        direction="row"
        gap="6px"
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <RoundButton
          onClick={handleFirstButtonClick}
          isActive={url === FRONT_IMAGE_URL}
        />
        <RoundButton
          onClick={handleSecondButtonClick}
          isActive={url === FRONT_IMAGE_URL_TWO}
        />
      </Stack>
    </Stack>
  );
};
