import { Input, Stack, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { Button } from "@/components/shared/Button/Button";

interface UserSubscriptionProps {
  title: string;
  sx?: SxProps<Theme>;
  isInvertedColor?: boolean;
}

export const UserSubscription = (props: UserSubscriptionProps) => {
  const { title, sx, isInvertedColor = false } = props;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: isInvertedColor ? "background.default" : "info.main",
        borderTop: "1px solid #E0E0E0",
        height: "250px",
        marginTop: "20px",
        ...sx,
      }}
      gap="35px"
    >
      <Text text={title} size={TextSize.M} />
      <Stack direction="row">
        <Input
          placeholder="Your email"
          disableUnderline
          sx={{
            height: "50px",
            width: "500px",
            bgcolor: isInvertedColor ? "#E0E0E0" : "white",
            padding: "10px",
          }}
        />
        <Button text="Subscribe" sx={{ height: "50px", borderRadius: 0 }} />
      </Stack>
    </Stack>
  );
};
