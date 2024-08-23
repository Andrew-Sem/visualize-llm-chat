import { SparklesIcon, UserRoundIcon } from "lucide-react";
import { type Message } from "../types/message";
import { ChatMessageContent } from "./chat-messsage-content";

export const ChatMessageGroup = ({
  messages,
  isUser,
}: {
  messages: Message[];
  isUser: boolean;
}) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} space-x-3`}>
    {!isUser && (
      <SparklesIcon className="mt-2 h-5 w-5 self-start text-muted-foreground" />
    )}
    <div className="space-y-1">
      {messages.map(
        (message, index) =>
          message.content && (
            <ChatMessageContent
              key={index}
              content={message.content}
              isUser={isUser}
            />
          ),
      )}
    </div>
    {isUser && (
      <div className="flex-shrink-0 self-start rounded-full bg-muted p-2">
        <UserRoundIcon className="h-5 w-5 text-muted-foreground" />
      </div>
    )}
  </div>
);
