import { type Message } from "../types/message";

export const ChatMessage = ({ message }: { message: Message }) => {
  return (
    <div
      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
      >
        {message.content}
      </div>
    </div>
  );
};
