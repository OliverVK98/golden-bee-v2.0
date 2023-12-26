import { ReactNode } from "react";
import { ThemeProvider } from "@mui/system";
import { Header } from "@/components/Header";
import { theme } from "@/styles/theme";
import { Footer } from "@/components/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
