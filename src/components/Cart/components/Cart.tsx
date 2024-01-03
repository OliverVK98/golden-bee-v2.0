import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { KeyboardEvent, useState } from "react";
import {DrawerContent} from "@/components/Cart/components/DrawerContent";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event as KeyboardEvent).key === "Escape") {
      setIsOpen(false);
    }
  };

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
        <DrawerContent toggleDrawer={toggleDrawer} handleKeyDown={handleKeyDown} />
      </Drawer>
    </div>
  );
};
