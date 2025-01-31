"use client";
import { HeroUIProvider } from "@heroui/react";

interface IProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
