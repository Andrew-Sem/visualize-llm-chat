import { HydrateClient } from "@/trpc/server";
import { Visualizer } from "../../components/visualizer";
import { mockMessages } from "../../mock/messages";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="md:container">
        <Visualizer initMessages={mockMessages} />
      </main>
    </HydrateClient>
  );
}
