import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { type User } from "@clerk/nextjs/server";
import { EllipsisVerticalIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export const AppHeader = ({ user }: { user: User | null }) => {
  return (
    <header className="container flex items-center justify-between py-4">
      <Link href={"/"} className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5" />
        <span className="text-xl">Visualize llm chat</span>
      </Link>
      <div className="hidden items-center space-x-4 sm:flex">
        <ModeToggle />
        {user ? (
          <UserButton />
        ) : (
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
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
