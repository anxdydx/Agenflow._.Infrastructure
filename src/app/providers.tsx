import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
}
