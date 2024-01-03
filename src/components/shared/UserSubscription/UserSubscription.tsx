import { Input, Stack, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { useState } from "react";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { Button } from "@/components/shared/Button/Button";
import { useSubscribeUser } from "@/components/shared/UserSubscription/api/userSubscriptionApi";

interface UserSubscriptionProps {
  title: string;
  sx?: SxProps<Theme>;
  isInvertedColor?: boolean;
}

export const UserSubscription = (props: UserSubscriptionProps) => {
  const { title, sx, isInvertedColor = false } = props;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [subscribeUser, { isLoading, isSuccess, isError }] = useSubscribeUser();

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return false;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribeClick = () => {
    setEmailError(false);

    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      subscribeUser(email);
    }
  };

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
          value={email}
          onChange={handleInputChange}
          placeholder="Your email"
          disableUnderline
          sx={{
            height: "50px",
            width: "500px",
            bgcolor: isInvertedColor ? "#E0E0E0" : "white",
            padding: "10px",
          }}
        />
        <Button
          disabled={isLoading}
          text="Subscribe"
          sx={{ height: "50px", borderRadius: 0 }}
          onClick={handleSubscribeClick}
        />
      </Stack>
      {isSuccess && (
        <Text
          text="Subscription successful!"
          sx={{ color: "background.paper" }}
        />
      )}
      {isError && (
        <Text
          text="This email is already subscribed."
          sx={{ color: "error.main" }}
        />
      )}
      {emailError && (
        <Text
          text="Please provide a valid email."
          sx={{ color: "error.main" }}
        />
      )}
    </Stack>
  );
};
