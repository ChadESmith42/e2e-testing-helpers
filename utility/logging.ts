import { browser } from 'protractor';

export class Logging {
  /**
   * Logs errors with an identified for the code block and optional data.
   * @param identifier String value to identify the code block (function, method, class, etc)
   * @param data OPTIONAL: Allows developer to pass additional information to be logged, such as variables, errors, additional comments for debugging.
   */
  public async LogError(identifier: string, data?: any[]) {
    try {
      return await browser.executeScript(() => {
        console.error(`Error in ${identifier}.`);
        if (data.length > 0) {
          for (const d in data) {
            console.log(`Additional information: `, d);
          }
        }
      });
    } catch (error) {
      await browser.executeScript(() => {
        console.error('Failed to log error', [ identifier, data ]);
      });
      throw error;
    }
  }

  public async LogInfo(identifier: string, data?: any[]) {
    try {
      return await browser.executeScript(() => {
        console.info(`Info for ${identifier}.`);
        if (data.length > 0) {
          for (const d in data) {
            console.info(`Additional information: `, d);
          }
        }
      });
    } catch (error) {
      await browser.executeScript(() => {
        console.error('Failed to log info', [ identifier, data ]);
      });
      throw error;
    }
  }
}