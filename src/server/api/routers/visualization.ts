import { db } from "@/server/db";
import { visualizations } from "@/server/db/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const visualizationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        content: z.string(),
        title: z.string(),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [insertedRecord] = await db
        .insert(visualizations)
        .values({
          ...input,
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
        where: (visualizations, { eq }) => eq(visualizations.id, input.id),
      });
    }),
  getAllForUser: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.visualizations.findMany({
      where: (table, { eq }) => eq(table.createdById, ctx.userId),
      orderBy: (visualizations, { asc }) => [asc(visualizations.id)],
    });
  }),
});
