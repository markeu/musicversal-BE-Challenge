/* eslint-disable no-undef */
import logger from "./logger";
import { SetupServer } from "./server";
import { PORT, EXIT_SIGNAL, EXIST_STATUS } from "./config/constants";

process.on("unhandledRejection", (reason, promise) => {
  logger.error(
    `App exiting due to an unhandled promise: ${promise} and reason: ${reason}`
  );
  // lets throw the error and let the uncaughtException handle below handle it
  throw reason;
});

process.on("uncaughtException", (error) => {
  logger.error(`App exiting due to an uncaught exception: ${error}`);
  process.exit(EXIST_STATUS.FAILURE);
});

(async () => {
  try {
    const server = new SetupServer(PORT);
    await server.init();
    server.start();

    for (const exitSignal of EXIT_SIGNAL) {
      process.on(exitSignal, async () => {
        try {
          await server.close();
          logger.info(`App exited with success`);
          process.exit(EXIST_STATUS.SUCCESS);
        } catch (error) {
          logger.error(`App exited with error: ${error}`);
          process.exit(EXIST_STATUS.FAILURE);
        }
      });
    }
  } catch (error) {
    logger.error(`App exited with error: ${error}`);
    process.exit(EXIST_STATUS.FAILURE);
  }
})();
