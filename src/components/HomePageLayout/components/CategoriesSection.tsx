import { Grid, Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { SectionImage } from "@/components/HomePageLayout/components/SectionImage";
import {
  BEES_IMAGE,
  BRACELETS_IMAGE,
  SILVER_STYLE_IMAGE,
  SUNFLOWERS_IMAGE,
} from "@/const";
import { Button } from "@/components/shared/Button/Button";

export const CategoriesSection = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}
  >
    <Text text="Shop By Collection" size={TextSize.M} />
    <Grid
      container
      spacing={5}
      sx={{
        width: "1150px",
      }}
    >
      <Grid item xs={6} sm={6} sx={{ paddingTop: "0 !important" }}>
        <SectionImage
          imgSrc={BRACELETS_IMAGE}
          width={530}
          height={300}
          text="Bracelets with Notes"
        />
      </Grid>
      <Grid item xs={6} sm={6} sx={{ paddingTop: "0 !important" }}>
        <SectionImage
          imgSrc={SILVER_STYLE_IMAGE}
          width={530}
          height={300}
          text="Silver Style Jewelry"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <SectionImage
          imgSrc={BEES_IMAGE}
          width={530}
          height={300}
          text="Bees"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <SectionImage
          imgSrc={SUNFLOWERS_IMAGE}
          width={530}
          height={300}
          text="Sunflowers"
        />
      </Grid>
    </Grid>
    <Button text="View all" />
  </Stack>
);
