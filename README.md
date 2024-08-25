# LLM Chat Visualizer

A simple UI to visualize and share LLM chat conversations.

## Motivation

When working with Large Language Models (LLMs), we may encounter incorrect behavior, such as inaccurate responses or improperly invoked function calls. To fix these bugs, we need to reproduce them, which often requires preserving or sharing the dialogue context. Traditional methods like screenshots or raw JSON logs have limitations:

- Screenshots lack full context and can be cumbersome to manage.
- Raw JSON logs are tedious to analyze.

This project aims to combine the advantages of both approaches, creating what we call "live screenshots" - fully isolated, visualized dialogues that are easy to share and analyze.

## Features

While still in development, our current and planned features include:

- Save and share visualizations of chat conversations
- Highlight important parts of the dialogue (using the `selected` prop)
- Edit and save JSON (planned)
- Add comments to individual messages (planned)

## Usage

### Content Format

The visualizer supports a simplified version of the OpenAI messages format (without complex content). The base schema definition is as follows (subject to change in future updates):

```typescript
const BaseMessage = z.object({
  content: z.string().optional(),
  selected: z.boolean().optional(),
});

const UserMessage = BaseMessage.extend({
  role: z.literal("user"),
  content: z.string(),
});

const AssistantMessage = BaseMessage.extend({
  role: z.literal("assistant"),
  tool_calls: z.array(z.unknown()).optional(),
});

const ToolMessage = BaseMessage.extend({
  role: z.literal("tool"),
  tool_call_id: z.string(),
  name: z.string(),
});

export const Message = z.union([UserMessage, AssistantMessage, ToolMessage]);
```
