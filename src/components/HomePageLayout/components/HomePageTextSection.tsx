import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { FRONT_PAGE_TEXT, FRONT_PAGE_TITLE } from "@/const";

export const HomePageTextSection = () => (
  <Stack
    alignItems="center"
    sx={{ height: "200px", bgcolor: "info.main" }}
    direction="column"
    justifyContent="center"
  >
    <Typography sx={{ fontWeight: "bold", fontSize: "27px" }}>
      {FRONT_PAGE_TITLE}
    </Typography>
    <Typography sx={{ fontSize: "20px" }}>{FRONT_PAGE_TEXT}</Typography>
  </Stack>
);
