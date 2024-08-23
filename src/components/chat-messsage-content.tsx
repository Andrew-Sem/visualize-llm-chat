import { cn } from "../lib/utils";

export const ChatMessageContent = ({
  content,
  isUser,
}: {
  content: string | undefined;
  isUser: boolean;
}) => (
  <div
    className={cn(
      "max-w-xs rounded-lg px-4 py-2",
      isUser
        ? "bg-primary text-primary-foreground"
        : "bg-secondary text-secondary-foreground",
      "lg:max-w-md",
    )}
  >
    {content ?? "Unable to get content"}
  </div>
);
