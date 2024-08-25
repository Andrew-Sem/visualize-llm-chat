"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { EllipsisVerticalIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import { ModeToggle } from "./mode-toggle";

export const AppHeader = ({ isUser }: { isUser: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="container flex items-center justify-between py-4">
      <Link href={"/"} className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5" />
        <span className="text-xl">Visualize llm chat</span>
      </Link>
      <div className="hidden items-center space-x-4 sm:flex">
        <Link
          className={cn(buttonVariants({ variant: "link" }), "px-0")}
          href={"/v/my"}
        >
          My visualizations
        </Link>
        <ModeToggle />
        {isUser ? (
          <UserButton />
        ) : (
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        )}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="sm:hidden">
          <EllipsisVerticalIcon className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-start space-y-4">
            <Link
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
              href={"/v/my"}
              onClick={() => setOpen(false)}
            >
              My visualizations
            </Link>
            <ModeToggle />
            {isUser ? (
              <UserButton />
            ) : (
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
