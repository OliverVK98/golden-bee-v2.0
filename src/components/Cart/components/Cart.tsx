import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { KeyboardEvent, useState } from "react";
import { Stack } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { Text } from "@/components/shared/Text/Text";
import { EmptyCart } from "@/components/Cart/components/EmptyCart";
import { NonEmptyCart } from "@/components/Cart/components/NonEmptyCart";
import { cartTestProducts } from "@/types/types";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const displayEmptyCart = false;

  const toggleDrawer = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event as KeyboardEvent).key === "Escape") {
      setIsOpen(false);
    }
  };

  // TODO: DECOMPOSE
  const DrawerContent = () => (
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
      {displayEmptyCart && <EmptyCart toggleDrawer={toggleDrawer} />}
      <NonEmptyCart products={cartTestProducts} setIsOpen={setIsOpen} />
    </Stack>
  );

  return (
    <div>
      <IconButton onClick={() => toggleDrawer(true)} color="inherit">
        <ShoppingCartIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        ModalProps={{
          BackdropProps: {
            onClick: () => toggleDrawer(false),
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
};
