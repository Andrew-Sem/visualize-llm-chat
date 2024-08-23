import { HydrateClient } from "@/trpc/server";
import { ChatMessagesList } from "../components/chat-messages-list";
import { ModeToggle } from "../components/mode-toggle";
import { Button } from "../components/ui/button";
import { mockMessages } from "../mock/messages";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="">
        <h1 className="text-5xl">Visualize llm chat</h1>
        <Button>Hello world</Button>
        <ModeToggle />
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <ChatMessagesList messages={mockMessages} />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
