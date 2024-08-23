import { HydrateClient } from "@/trpc/server";
import { ModeToggle } from "../components/mode-toggle";
import { Button } from "../components/ui/button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="">
        <h1 className="text-5xl">Visualize llm chat</h1>
        <Button>Hello world</Button>
        <ModeToggle />
      </main>
    </HydrateClient>
  );
}
