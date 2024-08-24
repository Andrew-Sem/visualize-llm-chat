import { cn } from "../lib/utils";

export const ChatMessageContent = ({
  content,
  isUser,
  lastInGroup,
  isSelected,
}: {
  content: string | undefined;
  isUser: boolean;
  lastInGroup: boolean;
  isSelected: boolean;
}) => (
  <div
    className={cn(
      "flex-grow",
      isUser ? "flex justify-end" : "flex justify-start",
    )}
  >
    <div className="relative">
      <div
        className={cn(
          "break-words px-4 py-2 text-sm",
          isUser
            ? lastInGroup
              ? "rounded-t-lg rounded-bl-lg bg-primary text-primary-foreground"
              : "rounded-lg bg-primary text-primary-foreground"
            : lastInGroup
              ? "rounded-t-lg rounded-br-lg bg-secondary text-secondary-foreground"
              : "rounded-lg bg-muted text-secondary-foreground",
          isUser ? "ml-10" : "mr-10",
          "max-w-xs lg:max-w-md",
        )}
      >
        {content ?? "Unable to get content"}
      </div>
      {lastInGroup ? (
        isUser ? (
          <>
            <div className="absolute -right-1 bottom-0 h-1.5 w-3 rounded-lg bg-primary" />
            <div
              className={cn(
                "absolute -right-3 bottom-0 h-3 w-3 rounded-full",
                isSelected ? "bg-muted" : "bg-background",
              )}
            />
          </>
        ) : (
          <>
            <div className="absolute -left-1 bottom-0 h-1.5 w-3 rounded-lg bg-secondary" />
            <div
              className={cn(
                "absolute -left-3 bottom-0 h-3 w-3 rounded-full bg-background",
                isSelected ? "bg-muted" : "bg-background",
              )}
            />
          </>
        )
      ) : null}
    </div>
  </div>
);
