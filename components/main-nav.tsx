"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  {
    title: "Clothing",
    href: "#clothing",
    description: "T-shirts, hoodies, jackets and more.",
  },
  {
    title: "Accessories",
    href: "#accessories",
    description: "Bags, watches, and jewelry.",
  },
  {
    title: "Footwear",
    href: "#footwear",
    description: "Sneakers, boots, and sandals.",
  },
  {
    title: "Home Goods",
    href: "#home-goods",
    description: "Decor, kitchenware, and textiles.",
  },
]

export default function MainNav() {
  return (
    <>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categories.map((category) => (
                    <ListItem key={category.title} title={category.title} href={category.href}>
                      {category.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>New Arrivals</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sale</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex w-full items-center py-3 border-b">
                Home
              </Link>
              <Link href="#" className="flex w-full items-center py-3 border-b">
                Shop
              </Link>
              <Link href="#" className="flex w-full items-center py-3 border-b">
                New Arrivals
              </Link>
              <Link href="#" className="flex w-full items-center py-3 border-b">
                Sale
              </Link>
              <Link href="#" className="flex w-full items-center py-3 border-b">
                About
              </Link>
              <Link href="/policies/shipping" className="flex w-full items-center py-3 border-b">
                Shipping Policy
              </Link>
              <Link href="/policies/refund" className="flex w-full items-center py-3 border-b">
                Refund Policy
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
