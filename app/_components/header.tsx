/** @format */
"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full z-[50]">
      <Card>
        <CardContent className="p-5 flex justify-between items-center flex-row">
          <Link href={"/"}>
            <p className="font-bold text-primary">
              JP<span className="text-white"> Barber</span>
            </p>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
              <SideMenu />
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
