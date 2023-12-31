import { Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import { CartProduct } from "@/types/types";
import { Image } from "@/components/shared/Image/Image";
import { Text } from "@/components/shared/Text/Text";
import { useCartContext } from "@/context";

interface CartProductDisplayProps {
  product: CartProduct;
}

export const CartProductDisplay = (props: CartProductDisplayProps) => {
  const { product } = props;
  const { addProduct, removeProduct } = useCartContext();

  return (
    <Stack
      direction="row"
      alignItems="center"
      height={100}
      sx={{ paddingLeft: "30px", paddingRight: "30px" }}
      gap="5px"
    >
      <Image
        src={product.imgUrl[0]}
        alt="cart-product"
        height={100}
        width={100}
      />
      <Stack gap="10px" width={390}>
        <Text text={product.name} />
        <Stack direction="row" justifyContent="space-between">
          <Text text={`$${product.discountedPrice || product.price}`} />
          <Stack direction="row" gap="5px" alignItems="center">
            <IconButton
              color="inherit"
              onClick={() => removeProduct(product.id)}
            >
              <RemoveCircleIcon color="success" />
            </IconButton>
            <Text text={product.quantity.toString()} />
            <IconButton color="inherit" onClick={() => addProduct(product)}>
              <AddCircleIcon color="success" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
