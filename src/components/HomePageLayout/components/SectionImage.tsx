import { Box } from "@mui/material";
import Image from "next/legacy/image";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { sectionImageTextZIndex } from "@/const";

interface SectionImageProps {
  imgSrc: string;
  text: string;
  width: number;
  height: number;
}

export const SectionImage = (props: SectionImageProps) => {
  const { text, imgSrc, height, width } = props;

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "10px",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        "&:hover div": {
          transform: "scale(1.1)",
          opacity: 0.8,
        },
        "& div": {
          transition: "transform 0.3s ease-in-out",
          width: "100%",
          height: "100%",
          position: "relative",
        },
      }}
    >
      <div>
        <Image
          src={imgSrc}
          alt="section-img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <Text
        text={text}
        size={TextSize.S}
        invertedColor
        sx={{
          zIndex: sectionImageTextZIndex,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
};
