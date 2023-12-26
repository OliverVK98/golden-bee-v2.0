import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { animationBannerZIndex } from "@/const";
import { Button, ButtonWidth } from "@/components/shared/Button/Button";

interface AnimatedTextProps {
  text: string;
}

export const BannerAnimation = (props: AnimatedTextProps) => {
  const { text } = props;

  return (
    <Stack
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "translate(-50%, -50%)",
        animation: "fadeInUp 1100ms ease forwards",
        zIndex: animationBannerZIndex,
        "@keyframes fadeInUp": {
          from: {
            opacity: 0,
            transform: "translate3d(0, 100px, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      }}
    >
      <Typography sx={{ fontSize: "3rem" }}>{text}</Typography>
      <Button width={ButtonWidth.MEDIUM} text="SHOP NOW" />
    </Stack>
  );
};
