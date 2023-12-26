import { Stack } from "@mui/material";
import { footerItems } from "@/const";
import { Image } from "@/components/shared/Image/Image";
import { Text, TextSize } from "@/components/shared/Text/Text";

export const FooterHighlights = () => (
  <Stack
    width="max"
    alignItems="center"
    justifyContent="center"
    height="100px"
    sx={{
      bgcolor: "info.main",
    }}
  >
    <Stack direction="row" width="1220px" justifyContent="space-between">
      {footerItems.map((item, index) => (
        <Stack direction="row" key={index} alignItems="center" gap="10px">
          <Image src={item.src} alt="footer logo" width={50} height={50} />
          <Text
            text={item.description}
            size={TextSize.S}
            bold
            sx={{ width: "200px" }}
          />
        </Stack>
      ))}
    </Stack>
  </Stack>
);
