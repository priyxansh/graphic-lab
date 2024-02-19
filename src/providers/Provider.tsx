"use client";

import ConvexClerkProvider from "./ConvexClerkProvider";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return <ConvexClerkProvider>{children}</ConvexClerkProvider>;
};

export default Provider;
