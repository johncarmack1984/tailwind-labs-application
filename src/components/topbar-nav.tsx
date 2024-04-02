import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import navlinks from "../app/navlinks";
import { ModeToggle } from "./theme-toggle";

const NavLink = ({ title, href }: { title: React.ReactNode; href: string }) => {
  return (
    <NavigationMenuItem key={href}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default function TopBarNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>{navlinks.map(NavLink)}</NavigationMenuList>
    </NavigationMenu>
  );
}
