import { Divider, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { ShippingGoalProgress } from "@/components/Cart/components/ShippingGoalProgress";
import { CartProduct } from "@/types/types";
import { CartProductDisplay } from "@/components/Cart/components/CartProductDisplay";
import { Text } from "@/components/shared/Text/Text";
import { Button } from "@/components/shared/Button/Button";

interface NonEmptyCartProps {
  products: CartProduct[];
  setIsOpen: (isOpen: boolean) => void;
}

export const NonEmptyCart = (props: NonEmptyCartProps) => {
  const { products, setIsOpen } = props;
  const router = useRouter();

  const onButtonClick = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  const currentCartTotal = products.reduce((total: number, product) => {
    const effectivePrice = product.discountedPrice ?? product.price;
    return total + effectivePrice * product.quantity;
  }, 0);

  return (
    <Stack gap="10px" alignItems="center">
      <ShippingGoalProgress currentProgress={currentCartTotal} goal={100} />
      {products.map((product, index) => (
        <CartProductDisplay product={product} key={index} />
      ))}
      <Divider sx={{ marginTop: "10px" }} />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ px: "30px", width: "390px" }}
      >
        <Text text="Total:" />
        <Text text={`$${currentCartTotal.toString()}`} bold />
      </Stack>
      <Button
        text="Checkout"
        sx={{ mx: "30px", width: "390px", height: "65px" }}
        onClick={onButtonClick}
      />
    </Stack>
  );
};
