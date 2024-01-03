"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/system";
import { Header } from "@/components/Header";
import { theme } from "@/styles/theme";
import { Footer } from "@/components/Footer";
import "../styles/globals.css";
import { CartContextProvider } from "@/context";
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {rtkApi} from "@/config/rtkApi";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CartContextProvider>
            <ApiProvider api={rtkApi}>
              <Header />
              {children}
              <Footer />
            </ApiProvider>
          </CartContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
