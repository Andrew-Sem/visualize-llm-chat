import { type Message } from "../types/message";
import { ChatMessage } from "./chat-message";

export const ChatMessagesList = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="space-y-2">
      {messages.map((message) => (
        <ChatMessage key={Math.random()} message={message} />
      ))}
    </div>
  );
};
