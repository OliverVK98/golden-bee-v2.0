import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { sectionImageTextZIndex } from "@/const";

interface SectionImageProps {
  imgSrc: string;
  text: string;
  width: number;
  height: number;
  url: string;
}

export const SectionImage = (props: SectionImageProps) => {
  const { text, imgSrc, height, width, url } = props;
  const router = useRouter();

  const onImageClick = () => router.push(url);

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
          onClick={onImageClick}
          layout="fill"
          objectFit="cover"
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
