import { Stack } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { KeyboardEvent } from "react";
import { Text } from "@/components/shared/Text/Text";
import { EmptyCart } from "@/components/Cart/components/EmptyCart";
import { NonEmptyCart } from "@/components/Cart/components/NonEmptyCart";
import { useCartContext } from "@/context";

interface DrawerContentProps {
  handleKeyDown: (event: KeyboardEvent) => void;
  toggleDrawer: (isOpen: boolean) => void;
}

export const DrawerContent = (props: DrawerContentProps) => {
  const { handleKeyDown, toggleDrawer } = props;
  const { cartProducts } = useCartContext();

  return (
    <Stack
      sx={{
        bgcolor: "background.default",
      }}
      role="presentation"
      height="100%"
      width="450px"
      onKeyDown={handleKeyDown}
    >
      <Stack
        height="80px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          px: "30px",
        }}
      >
        <Stack direction="row">
          <ShoppingBagIcon />
          <Text text="My Shopping Cart" />
        </Stack>
        <IconButton color="inherit" onClick={() => toggleDrawer(false)}>
          <DisabledByDefaultIcon color="error" />
        </IconButton>
      </Stack>
      {cartProducts.length < 1 && <EmptyCart toggleDrawer={toggleDrawer} />}
      {cartProducts.length > 0 && <NonEmptyCart setIsOpen={toggleDrawer} />}
    </Stack>
  );
};
