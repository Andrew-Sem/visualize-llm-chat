"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/types/message";
import { jsonrepair } from "jsonrepair";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { api } from "../trpc/react";
import { Loader } from "./ui/loader";

export const CreateVisualization = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const createVisualizationMutation = api.visualization.create.useMutation({
    onSuccess: (data) => {
      router.push(`/v/${data.id}`);
    },
  });
  const createVisualizationHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const parsedContent = JSON.parse(jsonrepair(content)) as Message[];
      const res = z.array(Message).safeParse(parsedContent);
      if (!res.success) {
        return toast("JSON не соответствует схеме");
      }
      createVisualizationMutation.mutate({ content: res.data });
    } catch (_) {
      return toast("Невалидный JSON");
    }
  };
  return (
    <Card className="w-full border-none shadow-none">
      <form onSubmit={createVisualizationHandler}>
        <CardHeader>
          <CardTitle>Create new visualization</CardTitle>
          <CardDescription>Just enter chat JSON</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-96 resize-none"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            disabled={createVisualizationMutation.isPending}
            className="space-x-2"
          >
            {createVisualizationMutation.isPending && <Loader size={"sm"} />}
            <span>Create</span>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
