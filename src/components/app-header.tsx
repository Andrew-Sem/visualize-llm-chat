import { Sparkles } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const AppHeader = () => {
  return (
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5" />
        <span className="text-xl">Visualize llm chat</span>
      </div>
      <ModeToggle />
    </header>
  );
};
