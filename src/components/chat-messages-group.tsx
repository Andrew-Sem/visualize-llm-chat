import { SparklesIcon, UserRoundIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { type Message } from "../types/message";
import { ChatMessageContent } from "./chat-messsage-content";

export const ChatMessageGroup = ({
  messages,
  isUser,
}: {
  messages: Message[];
  isUser: boolean;
}) => (
  <div className="relative flex w-full">
    <div className="w-full">
      {messages.map(
        (message, index) =>
          message.content && (
            <div
              key={index}
              className={cn(
                "flex w-full items-end",
                message.selected ? "bg-muted" : "",
              )}
            >
              {!isUser && (
                <div className="sticky bottom-0 ml-3 flex-shrink-0 self-end p-2">
                  {index === 0 && (
                    <SparklesIcon className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              )}
              <div className="flex-grow px-2 py-1">
                <ChatMessageContent
                  content={message.content}
                  isUser={isUser}
                  lastInGroup={index === messages.length - 1}
                  isSelected={message.selected === true}
                />
              </div>
              {isUser && (
                <div className="sticky bottom-0 mr-3 flex-shrink-0 self-end rounded-full bg-muted p-2">
                  {index === 0 && (
                    <UserRoundIcon className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              )}
            </div>
          ),
      )}
    </div>
  </div>
);
