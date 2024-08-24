import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { EllipsisVerticalIcon, Sparkles } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const AppHeader = () => {
  return (
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5" />
        <span className="text-xl">Visualize llm chat</span>
      </div>
      <div className="hidden sm:block">
        <ModeToggle />
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
