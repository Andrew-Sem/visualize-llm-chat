import { db } from "@/server/db";
import { visualizations } from "@/server/db/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { Message } from "../../../types/message";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const visualizationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.array(Message) }))
    .mutation(async ({ ctx, input }) => {
      const [insertedRecord] = await db
        .insert(visualizations)
        .values({
          content: JSON.stringify(input.content),
          createdById: ctx.userId,
        })
        .returning({ id: visualizations.id });
      if (!insertedRecord)
        throw new TRPCError({
          message: "Unable to create visualization",
          code: "INTERNAL_SERVER_ERROR",
        });
      return { id: insertedRecord.id };
    }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.visualizations.findFirst({
        where: (table, { eq }) => eq(table.id, input.id),
      });
    }),
});
