"use client";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Image } from "@/components/shared/Image/Image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  const { images } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const onImageClick = (index: number) => setActiveStep(index);

  return (
    <Stack direction="column">
      <Box sx={{ maxWidth: 630, flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((image, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image
                  src={image}
                  alt="product-image"
                  height={630}
                  width={630}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <Stack direction="row" gap="26.25px">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={105}
            height={105}
            alt="product-image"
            isBorderActive={index === activeStep}
            clickable
            onClick={() => onImageClick(index)}
          />
        ))}
      </Stack>
    </Stack>
  );
};
