import { Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { SectionImage } from "@/components/HomePageLayout/components/SectionImage";
import {
  MODERN_STYLES_IMAGE,
  NATURE_LOVERS_IMAGE,
  PREMIUM_JEWELRY_IMAGE,
} from "@/const";

export const StylesSection = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{ margin: "20px 0px" }}
  >
    <Text text="Shop By Style" size={TextSize.M} />
    <Stack direction="row" gap="20px">
      <SectionImage
        imgSrc={MODERN_STYLES_IMAGE}
        width={350}
        height={300}
        text="Modern Styles"
        url="/earrings"
      />
      <SectionImage
        imgSrc={NATURE_LOVERS_IMAGE}
        width={350}
        height={300}
        text="Nature Lovers"
        url="/bees"
      />
      <SectionImage
        imgSrc={PREMIUM_JEWELRY_IMAGE}
        width={350}
        height={300}
        text="Premium Jewelry"
        url="/rings"
      />
    </Stack>
  </Stack>
);
