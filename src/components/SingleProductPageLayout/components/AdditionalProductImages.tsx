import { Stack } from "@mui/material";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { additionalImagesTitle } from "../const";
import { AdditionalImageWithInfo } from "@/types/types";
import { Image } from "@/components/shared/Image/Image";

interface AdditionalProductImagesProps {
  additionalInfo: AdditionalImageWithInfo[];
}

export const AdditionalProductImages = (
  props: AdditionalProductImagesProps,
) => {
  const { additionalInfo } = props;

  return (
    <Stack gap="30px">
      <Text
        text={additionalImagesTitle}
        size={TextSize.M}
        bold
        sx={{ width: "1120px", textAlign: "center" }}
      />
      <Stack direction="row" gap="50px">
        {additionalInfo.map((item, index) => (
          <Stack key={index} gap="20px" sx={{ width: "340px" }}>
            <Image
              src={item.url}
              alt="additional-product-image"
              width={340}
              height={340}
            />
            <Text text={item.description} sx={{ textAlign: "center" }} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
