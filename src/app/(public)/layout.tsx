import { Header } from "@/components/header/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="m-full flex justify-center max-w-xl px-4 py-8"></div>
      {children}
    </div>
  );
}
