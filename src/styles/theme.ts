"use client";

import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Beige
    },
    background: {
      default: "#FFFFFF",
      paper: "#39A934",
    },
    info: {
      main: "#E0E0E0", // Grey
    },
    error: {
      main: "#FF0000", // Red
    },
    accent: {
      main: "#FFDE59", // Yellow
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});
