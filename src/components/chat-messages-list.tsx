import { type Message } from "../types/message";
import { ChatMessagesGroup } from "./chat-messages-group";

export const ChatMessagesList = ({ messages }: { messages: Message[] }) => {
  const groupedMessages: Message[][] = [];
  let currentGroup: Message[] = [];
  let currentIsUser: boolean | null = null;

  messages.forEach((message) => {
    const isUser = message.role === "user";
    if (isUser !== currentIsUser) {
      if (currentGroup.length > 0) {
        groupedMessages.push(currentGroup);
      }
      currentGroup = [message];
      currentIsUser = isUser;
    } else {
      currentGroup.push(message);
    }
  });

  if (currentGroup.length > 0) {
    groupedMessages.push(currentGroup);
  }

  return (
    <div className="space-y-2">
      {groupedMessages.map((group, index) => (
        <ChatMessagesGroup
          key={index}
          messages={group}
          isUser={group[0]?.role === "user"}
        />
      ))}
    </div>
  );
};
