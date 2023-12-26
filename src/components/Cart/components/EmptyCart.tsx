import { Stack } from "@mui/material";
import Image from "next/legacy/image";
import { Text, TextSize } from "@/components/shared/Text/Text";
import { Button, ButtonWidth } from "@/components/shared/Button/Button";

interface EmptyCartProps {
  toggleDrawer: (isOpen: boolean) => void;
}

export const EmptyCart = (props: EmptyCartProps) => {
  const { toggleDrawer } = props;

  return (
    <Stack
      height="660px"
      sx={{
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
      gap="5px"
      alignItems="center"
    >
      <Text
        text="Your cart is empty 😭"
        size={TextSize.M}
        sx={{ marginTop: "50px", marginBottom: "15px" }}
      />
      <Image
        src="/assets/cart/emptycart.jpg"
        width={390}
        height={470}
        alt="payment-logo"
      />
      <Button
        text="Continue Shopping"
        width={ButtonWidth.LARGE}
        onClick={() => toggleDrawer(false)}
      />
    </Stack>
  );
};
