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
  <div className="w-full">
    {messages.map(
      (message, index) =>
        message.content && (
          <div
            key={index}
            className={cn(
              "flex w-full items-end px-2 py-1",
              message.selected ? "bg-muted" : "",
            )}
          >
            {!isUser && (
              <div className="mr-3 flex-shrink-0 self-end">
                <SparklesIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            )}
            <ChatMessageContent
              content={message.content}
              isUser={isUser}
              lastInGroup={index === messages.length - 1}
              isSelected={message.selected === true}
            />
            {isUser && (
              <div className="ml-3 flex-shrink-0 self-end rounded-full bg-muted p-2">
                <UserRoundIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            )}
          </div>
        ),
    )}
  </div>
);
