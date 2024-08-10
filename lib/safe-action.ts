import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
  handleReturnedServerError(e: Error) {
    return "Oh no, something went wrong with " + e;
  },
});
