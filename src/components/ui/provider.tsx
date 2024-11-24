"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { ColorModeProvider } from "./color-mode";

const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      colorPalette: "blue",
      direction: "rtl",
    },
    "html, body": {
      margin: 0,
      padding: 0,
      height: "full",
      width: "full",
    },
    "#root": {
      height: "full",
      width: "full",
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "Vazirmatn" },
        heading: { value: "Vazirmatn" },
      },
    },
    semanticTokens: {
      radii: {
        l1: { value: "0.125rem" },
        l2: { value: "0.25rem" },
        l3: { value: "0.375rem" },
      },
    },
  },
});

export const Provider = (props: PropsWithChildren) => (
  <ChakraProvider value={system}>
    <ColorModeProvider>{props.children}</ColorModeProvider>
  </ChakraProvider>
);
