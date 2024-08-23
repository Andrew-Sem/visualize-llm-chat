import { cn } from "../lib/utils";

export const ChatMessageContent = ({
  content,
  isUser,
  lastInGroup,
}: {
  content: string | undefined;
  isUser: boolean;
  lastInGroup: boolean;
}) => (
  <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
    <div className="relative">
      <div
        className={cn(
          "max-w-xs break-words px-4 py-2 text-sm",
          isUser
            ? lastInGroup
              ? "rounded-t-lg rounded-bl-lg bg-primary text-primary-foreground"
              : "rounded-lg bg-primary text-primary-foreground"
            : lastInGroup
              ? "rounded-t-lg rounded-br-lg bg-secondary text-secondary-foreground"
              : "rounded-lg bg-secondary text-secondary-foreground",
          isUser ? "ml-10" : "mr-10",
          "lg:max-w-md",
        )}
      >
        {content ?? "Unable to get content"}
      </div>
      {lastInGroup ? (
        isUser ? (
          <>
            <div className="absolute -right-1 bottom-0 h-1.5 w-3 rounded-lg bg-primary" />
            <div className="absolute -right-3 bottom-0 h-3 w-3 rounded-full bg-background" />
          </>
        ) : (
          <>
            <div className="absolute -left-1 bottom-0 h-1.5 w-3 rounded-lg bg-secondary" />
            <div className="absolute -left-3 bottom-0 h-3 w-3 rounded-full bg-background" />
          </>
        )
      ) : null}
    </div>
  </div>
);
