"use client";

import { ChatMessagesList } from "@/components/chat-messages-list";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { type Message } from "../types/message";
import { JsonEditor } from "./json-editor";

export const Vizualizer = ({ initMessages }: { initMessages: Message[] }) => {
  const [messages, setMessages] = useState<Message[]>(initMessages);
  const [jsonText, setJsonText] = useState("");

  useEffect(() => {
    setJsonText(
      messages.map((msg) => JSON.stringify(msg, null, 2)).join(",\n"),
    );
  }, [messages]);

  const handleJsonChange = (newJsonText: string) => {
    setJsonText(newJsonText);
    try {
      const newMessages = JSON.parse(`[${newJsonText}]`) as Message[];
      // TODO: performance improve. It's not works with selected prop if we not spread array'
      setMessages([...newMessages]);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  return (
    <>
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
          <ScrollArea className="h-[90vh] py-4">
            <ChatMessagesList messages={messages} />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="json">
          <ScrollArea className="h-[90vh] py-4">
            <JsonEditor value={jsonText} onChange={handleJsonChange} />
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
              <ChatMessagesList messages={messages} />
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={50}
            minSize={30}
            className="hidden md:block"
          >
            <ScrollArea className="h-[90vh] p-4">
              <JsonEditor value={jsonText} onChange={handleJsonChange} />
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};
