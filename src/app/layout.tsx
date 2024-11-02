"use client";

import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "@/components";
import ReduxProvider from "@/components/redux-provider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReduxProvider>
            <Layout />
            <div className=" p-4">{children}</div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
