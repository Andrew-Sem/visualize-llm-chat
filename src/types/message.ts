import { z } from "zod";

const BaseMessage = z.object({
  content: z.string().optional(),
  selected: z.boolean().optional(),
});

const UserMessage = BaseMessage.extend({
  role: z.literal("user"),
  content: z.string(),
});

export const AssistantMessage = BaseMessage.extend({
  role: z.literal("assistant"),
  tool_calls: z.array(z.unknown()).optional(),
});

export const ToolMessage = BaseMessage.extend({
  role: z.literal("tool"),
  tool_call_id: z.string(),
  name: z.string(),
});

export const Message = z.union([UserMessage, AssistantMessage, ToolMessage]);

export type Message = z.infer<typeof Message>;
export type AssistantMessage = z.infer<typeof AssistantMessage>;
export type ToolMessage = z.infer<typeof ToolMessage>;
