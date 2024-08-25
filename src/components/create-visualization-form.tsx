"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/types/message";
import { zodResolver } from "@hookform/resolvers/zod";
import { jsonrepair } from "jsonrepair";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { api } from "../trpc/react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Loader } from "./ui/loader";

const formSchema = z.object({
  title: z.string().min(2).max(255),
  description: z.string().max(255).optional(),
  content: z
    .string()
    .min(2)
    .refine((value) => {
      try {
        const parsedContent = JSON.parse(jsonrepair(value)) as Message[];
        const res = z.array(Message).safeParse(parsedContent);
        if (!res.success) {
          toast("JSON does not match the message schema");
          return false;
        }
        return true;
      } catch (_) {
        toast("Invalid JSON");
        return false;
      }
    }),
});

export const CreateVisualizationForm = () => {
  const router = useRouter();
  const createVisualizationMutation = api.visualization.create.useMutation({
    onSuccess: (data) => {
      router.push(`/v/${data.id}`);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createVisualizationMutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title..." {...field} />
              </FormControl>
              <FormDescription>
                You will be able to search by this title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description..." {...field} />
              </FormControl>
              <FormDescription>Not necessary</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="content..."
                  {...field}
                  className="max-h-72"
                />
              </FormControl>
              <FormDescription>Chat history in JSON format</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={createVisualizationMutation.isPending}
          type="submit"
          className="space-x-2 self-end"
        >
          {createVisualizationMutation.isPending && <Loader size={"sm"} />}
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  );
};
