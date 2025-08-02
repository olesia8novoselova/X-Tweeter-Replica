import Link from "next/link";
import type { IMenuItem } from "./menu.data";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  return (
    <Link
      className={isActive ? "text-white" : "text-white/70"}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
}
