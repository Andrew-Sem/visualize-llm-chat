import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Message } from "../types/message";

export const VisCard = ({
  messages,
  createdAt,
  title,
  description,
}: {
  messages: Message;
  createdAt: Date;
  title: string;
  description: string | null;
}) => {
  return (
    <Card className="flex max-h-80 flex-col overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="relative flex-grow overflow-hidden p-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary-foreground/20 to-primary-foreground" />
        <pre className="max-h-full overflow-hidden text-sm">
          {JSON.stringify(messages, null, 2)}
        </pre>
      </CardContent>

      <CardFooter className="bg-background p-4">
        <p className="text-sm text-muted-foreground">
          Created: {new Date(createdAt).toLocaleString()}
        </p>
      </CardFooter>
    </Card>
  );
};
