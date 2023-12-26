import Image from "next/legacy/image";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

interface StarRatingProps {
  rating: number;
}
export const StarRating = (props: StarRatingProps) => {
  const { rating } = props;

  return (
    <Stack
      gap="4"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ cursor: "pointer" }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/assets/star.png"
          alt="star"
          height={20}
          width={20}
        />
      ))}
      <Typography>({rating})</Typography>
    </Stack>
  );
};
