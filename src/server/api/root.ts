import fetchVirusData from "./routers/fetchVirusData";
import searchCondition from "./routers/searchCondition";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  searchCondition: searchCondition,
  fetchVirusData: fetchVirusData,
});

// export type definition of API
export type AppRouter = typeof appRouter;
