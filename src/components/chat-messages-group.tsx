import { Sparkles, UserRoundIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { type Message } from "../types/message";
import { ChatMessage } from "./chat-messsage";

export const ChatMessagesGroup = ({
  messages,
  isUser,
}: {
  messages: Message[];
  isUser: boolean;
}) => {
  return (
    <div className="relative flex w-full">
      <div className="w-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full items-end",
              message.selected ? "bg-muted" : "",
            )}
          >
            {!isUser ? (
              index === messages.length - 1 ? (
                <div className="sticky bottom-0 ml-3 flex-shrink-0 self-end rounded-full p-2">
                  <Sparkles className="h-5 w-5 text-muted-foreground" />
                </div>
              ) : (
                <div className="w-12 flex-shrink-0" />
              )
            ) : null}
            <div className="flex-grow px-2 py-1">
              <ChatMessage
                message={message}
                lastInGroup={index === messages.length - 1}
              />
            </div>
            {isUser ? (
              index === messages.length - 1 ? (
                <div className="sticky bottom-0 mr-3 flex-shrink-0 self-end rounded-full bg-muted p-2">
                  <UserRoundIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              ) : (
                <div className="w-12 flex-shrink-0" />
              )
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
