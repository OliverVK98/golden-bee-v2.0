"use client";

import React from "react";
import { Stack } from "@mui/material";
import { HeaderLinks } from "@/components/Header/components/HeaderLinks";
import { Cart } from "@/components/Cart";

export const Header = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    gap="7px"
    sx={{
      bgcolor: "background.default",
      height: "5vh",
      padding: "20px",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    }}
  >
    <HeaderLinks />
    <Cart />
  </Stack>
);
