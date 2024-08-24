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
    <div className="relative flex w-full md:px-0">
      <div className="w-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full items-end",
              message.selected ? "bg-muted" : "",
            )}
          >
            <div className="hidden md:block">
              {!isUser ? (
                index === messages.length - 1 ? (
                  <div className="sticky bottom-0 flex-shrink-0 self-end rounded-full p-1 md:ml-3 md:p-2">
                    <Sparkles className="h-5 w-5 text-muted-foreground" />
                  </div>
                ) : (
                  <div className="w-9 flex-shrink-0 md:w-12" />
                )
              ) : null}
            </div>
            <div
              className={cn("flex-grow py-1", message.selected ? "" : "px-4")}
            >
              <ChatMessage
                message={message}
                lastInGroup={index === messages.length - 1}
              />
            </div>
            <div className="hidden md:block">
              {isUser ? (
                index === messages.length - 1 ? (
                  <div className="sticky bottom-0 flex-shrink-0 self-end rounded-full bg-muted p-1 md:mr-3 md:p-2">
                    <UserRoundIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                ) : (
                  <div className="w-9 flex-shrink-0 md:w-12" />
                )
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
