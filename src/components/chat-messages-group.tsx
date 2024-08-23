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
  <div
    className={`relative flex ${isUser ? "justify-end" : "justify-start"} space-x-3`}
  >
    {!isUser && (
      <div className="sticky bottom-0 mt-2 self-end">
        <SparklesIcon className="h-5 w-5 text-muted-foreground" />
      </div>
    )}
    <div className="space-y-1">
      {messages.map(
        (message, index) =>
          message.content && (
            <ChatMessageContent
              key={index}
              content={message.content}
              isUser={isUser}
              lastInGroup={index === messages.length - 1}
            />
          ),
      )}
    </div>
    {isUser && (
      <div className="sticky bottom-0 self-end rounded-full bg-muted p-2">
        <UserRoundIcon className="h-5 w-5 text-muted-foreground" />
      </div>
    )}
  </div>
);
