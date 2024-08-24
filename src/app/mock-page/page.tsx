import { HydrateClient } from "@/trpc/server";
import { Vizualizer } from "../../components/vizualizer";
import { mockMessages } from "../../mock/messages";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="md:container">
        <Vizualizer messages={mockMessages} />
      </main>
    </HydrateClient>
  );
}
