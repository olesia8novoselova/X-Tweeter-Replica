"use client";

import { usePathname } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {MENU.map((menuItem) => (
        <MenuItem
          key={menuItem.name}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  );
}
