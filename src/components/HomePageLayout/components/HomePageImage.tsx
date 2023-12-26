import Image from "next/legacy/image";
import { Stack } from "@mui/material";

interface FrontPageImageProps {
  src: string;
}
export const HomePageImage = (props: FrontPageImageProps) => {
  const { src } = props;

  return (
    <Stack
      sx={{ width: "100%", height: "800px", position: "relative" }}
      alignItems="center"
      justifyContent="center"
    >
      <Image src={src} alt="front-image" layout="fill" priority />
    </Stack>
  );
};
