import { LinearProgress, Stack } from "@mui/material";
import { Text } from "@/components/shared/Text/Text";

interface ShippingGoalProgressProps {
  currentProgress: number;
  goal: number;
}
export const ShippingGoalProgress = (props: ShippingGoalProgressProps) => {
  const { currentProgress, goal } = props;

  if (currentProgress > goal)
    return (
      <Text
        text="🎉 You’ve unlocked Free Shipping!"
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
          textAlign: "center",
        }}
        bold
      />
    );

  return (
    <Stack
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
        px: "30px",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={currentProgress}
        color="success"
      />
      <Text
        text={`🚚 Add $${(goal - currentProgress).toFixed(
          2,
        )} more for FREE shipping!`}
        sx={{ textAlign: "center", marginTop: "5px" }}
      />
    </Stack>
  );
};
