
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="">
        <h1 className="text-5xl">Visualize llm chat</h1>
      </main>
    </HydrateClient>
  );
}
