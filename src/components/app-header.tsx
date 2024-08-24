"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { EllipsisVerticalIcon, Sparkles } from "lucide-react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const AppHeader = ({ session }: { session: Session | null }) => {
  return (
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5" />
        <span className="text-xl">Visualize llm chat</span>
      </div>
      <div className="hidden items-center space-x-4 sm:flex">
        <ModeToggle />
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                className="rounded-full"
                src={session.user.image ?? ""}
                height={36}
                width={36}
                alt={session.user.name ?? "User name"}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div>{session.user.name}</div>
                <div className="text-xs text-muted-foreground">
                  {session.user.email}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("github")}>Sign In</Button>
        )}
      </div>
      <Sheet>
        <SheetTrigger className="sm:hidden">
          <EllipsisVerticalIcon className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent>
          <div className="">
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
