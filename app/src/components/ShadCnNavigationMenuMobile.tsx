"use client"

import * as React from "react"
import Link from "next/link"
import { Bars3Icon } from '@heroicons/react/24/outline';

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

export function ShadCnNavigationMenuMobile() {
  return (
    <NavigationMenu className="[&_div.absolute]:-left-[2.5rem] [&_div.absolute]:top-8">
      <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
            <Bars3Icon className="h-8 w-8" />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-slate-50">
          <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">

            <li>
              <NavigationMenuLink as-child>
                <Link
                  href="/"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Home</div>
                </Link>
              </NavigationMenuLink>
            </li>
            {/*<li>
              <NavigationMenuLink as-child>
                <Link
                  href="/work"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Work</div>
                </Link>
              </NavigationMenuLink>
            </li>*/}
            <li>
              <NavigationMenuLink as-child>
                <Link
                  href="/projects"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Projects</div>
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
