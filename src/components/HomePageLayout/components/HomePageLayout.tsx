import { Stack } from "@mui/material";
import { HomePageBanner } from "@/components/HomePageLayout/components/HomePageBanner";
import { ItemSection } from "@/components/shared/ItemSection/ItemSection";
import { HomePageTextSection } from "@/components/HomePageLayout/components/HomePageTextSection";
import { HomePageImage } from "@/components/HomePageLayout/components/HomePageImage";
import { FRONT_IMAGE_FOUR, FRONT_IMAGE_THREE } from "@/const";
import { CategoriesSection } from "@/components/HomePageLayout/components/CategoriesSection";
import { UserSubscription } from "@/components/shared/UserSubscription/UserSubscription";
import { StylesSection } from "@/components/HomePageLayout/components/StylesSection";

export const HomePageLayout = () => (
  <Stack direction="column" gap="4px">
      <HomePageBanner />
      <ItemSection title="Trending Now" priority/>
      <HomePageTextSection />
      <ItemSection title="New Arrivals" />
      <HomePageImage src={FRONT_IMAGE_THREE} />
      <CategoriesSection />
      <UserSubscription title="Subscribe for exclusive deals and VIP access" />
      <StylesSection />
      <HomePageImage src={FRONT_IMAGE_FOUR} />
  </Stack>
);
