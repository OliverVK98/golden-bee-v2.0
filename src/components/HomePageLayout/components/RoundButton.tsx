import { Button as MaterialButton } from "@mui/material";

interface ButtonProps {
  onClick?: () => void;
  isActive: boolean;
}
export const RoundButton = (props: ButtonProps) => {
  const { onClick, isActive } = props;

  return (
    <MaterialButton
      onClick={onClick}
      sx={{
        minWidth: 0,
        padding: 0,
        borderRadius: "50%",
        width: "12px",
        height: "12px",
        border: "1px solid",
        borderColor: "background.default",
        backgroundColor: isActive ? "background.default" : "transparent",
      }}
    />
  );
};
