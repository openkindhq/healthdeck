import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export default createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.fuse.search(input);
  }),
});
