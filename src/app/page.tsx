import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HydrateClient } from "@/trpc/server";
import { ChatMessagesList } from "../components/chat-messages-list";
import { ModeToggle } from "../components/mode-toggle";
import { mockMessages } from "../mock/messages";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="container">
        <h1 className="text-5xl">Visualize llm chat</h1>
        <ModeToggle />
        <ResizablePanelGroup
          direction="horizontal"
          className="mt-8 rounded-lg border"
        >
          <ResizablePanel defaultSize={75} minSize={30}>
            <ScrollArea className="h-[80vh] p-4">
              <ChatMessagesList messages={mockMessages} />
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={75}
            minSize={30}
            className="hidden md:block"
          >
            <ScrollArea className="h-[80vh] p-4">
              <pre className="text-wrap text-sm">
                {mockMessages
                  .map((msg) => JSON.stringify(msg, null, 2))
                  .join(",\n")}
              </pre>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </HydrateClient>
  );
}
