"use client";

import ConvexClerkProvider from "./ConvexClerkProvider";
import { ModalProvider } from "./ModalProvider";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return (
    <ConvexClerkProvider>
      <ModalProvider />
      {children}
    </ConvexClerkProvider>
  );
};

export default Provider;
