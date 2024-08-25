import { db } from "@/server/db";
import { visualizations } from "@/server/db/schema";
import { z } from "zod";
import { Message } from "../../../types/message";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const visualizationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.array(Message) }))
    .mutation(async ({ ctx, input }) => {
      await db.insert(visualizations).values({
        content: JSON.stringify(input.content),
        createdById: ctx.userId,
      });
    }),
});
