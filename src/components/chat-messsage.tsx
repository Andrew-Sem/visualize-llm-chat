import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneIcon, WrenchIcon } from "lucide-react";
import { cn } from "../lib/utils";
import type {
  AssistantMessage,
  Message,
  ToolMessage,
  UserMessage,
} from "../types/message";

const UserChatMessage = ({
  lastInGroup,
  message,
}: {
  lastInGroup: boolean;
  message: UserMessage;
}) => {
  return (
    <div
      className={cn("flex w-full justify-end", message.selected ? "pr-4" : "")}
    >
      <div
        className={cn(
          "relative ml-10 max-w-md break-words px-4 py-2 text-sm lg:max-w-md",
          lastInGroup
            ? "rounded-t-lg rounded-bl-lg bg-primary text-primary-foreground"
            : "rounded-lg bg-primary text-primary-foreground",
        )}
      >
        {message.content}
        {lastInGroup ? (
          <>
            <div className="absolute -right-1 bottom-0 h-1.5 w-3 rounded-lg bg-primary" />
            <div
              className={cn(
                "absolute -right-3 bottom-0 h-3 w-3 rounded-full",
                message.selected ? "bg-muted" : "bg-background",
              )}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

const NonUserChatMessage = ({
  lastInGroup,
  message,
}: {
  lastInGroup: boolean;
  message: AssistantMessage | ToolMessage;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-md justify-start pr-4 md:pr-10 lg:max-w-md",
        message.selected ? "pl-4" : "",
      )}
    >
      <div
        className={cn(
          "relative w-full max-w-md break-words p-4 text-sm lg:max-w-md",
          lastInGroup
            ? "rounded-t-lg rounded-br-lg bg-secondary text-secondary-foreground"
            : "rounded-lg bg-muted text-secondary-foreground",
        )}
      >
        {message.role === "tool" ? (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="justify-normal space-x-2">
                <span>Tool result</span>
                <div className="absolute right-2 top-2 text-muted-foreground">
                  <WrenchIcon className="h-4 w-4" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <pre className="text-wrap break-all text-xs">
                  {JSON.stringify(message, null, 2)}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : message.tool_calls?.length ? (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="justify-normal space-x-2">
                <span>Tool call</span>
                <div className="absolute right-2 top-2 text-muted-foreground">
                  <PhoneIcon className="h-4 w-4" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <pre className="text-wrap break-all text-xs">
                  {JSON.stringify(message, null, 2)}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <div>{message.content}</div>
        )}
        {}
        {lastInGroup ? (
          <>
            <div className="absolute -left-1 bottom-0 h-1.5 w-3 rounded-lg bg-secondary" />
            <div
              className={cn(
                "absolute -left-3 bottom-0 h-3 w-3 rounded-full",
                message.selected ? "bg-muted" : "bg-background",
              )}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export const ChatMessage = ({
  lastInGroup,
  message,
}: {
  lastInGroup: boolean;
  message: Message;
}) => {
  return message.role === "user" ? (
    <UserChatMessage lastInGroup={lastInGroup} message={message} />
  ) : (
    <NonUserChatMessage lastInGroup={lastInGroup} message={message} />
  );
};
