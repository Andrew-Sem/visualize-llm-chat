import { HydrateClient } from "@/trpc/server";
import { Button } from "../components/ui/button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="">
        <h1 className="text-5xl">Visualize llm chat</h1>
        <Button>Hello world</Button>
      </main>
    </HydrateClient>
  );
}
