import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HydrateClient } from "@/trpc/server";
import { ChatMessagesList } from "../components/chat-messages-list";
import { mockMessages } from "../mock/messages";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="md:container">
        <Tabs defaultValue="chat" className="w-full md:hidden">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="chat">
              Chat
            </TabsTrigger>
            <TabsTrigger className="w-full" value="json">
              Json
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chat">
            <ScrollArea className="h-[85vh] py-0.5">
              <ChatMessagesList messages={mockMessages} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="json">
            <ScrollArea className="h-[85vh] py-0.5">
              <pre className="text-wrap text-sm">
                {mockMessages
                  .map((msg) => JSON.stringify(msg, null, 2))
                  .join(",\n")}
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="hidden md:block">
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border"
          >
            <ResizablePanel defaultSize={40} minSize={35}>
              <ScrollArea className="h-[90vh] py-4">
                <ChatMessagesList messages={mockMessages} />
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={50}
              minSize={30}
              className="hidden md:block"
            >
              <ScrollArea className="h-[90vh] p-4">
                <pre className="text-wrap text-sm">
                  {mockMessages
                    .map((msg) => JSON.stringify(msg, null, 2))
                    .join(",\n")}
                </pre>
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </HydrateClient>
  );
}
