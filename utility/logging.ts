import { browser } from 'protractor';

export class Logging {
  /**
   * Logs errors with an identified for the code block and optional data.
   * @param identifier String value to identify the code block (function, method, class, etc)
   * @param data OPTIONAL: Allows developer to pass additional information to be logged, such as variables, errors, additional comments for debugging.
   */
  public LogError(identifier: string, data?: any[]) {
    browser.executeScript(() => {
      console.log(`Error in ${identifier}.`);
      if (data.length > 0) {
        for (const d in data) {
          console.log(`Additional information: `, d);
        }
      }
    }).then(resolve => {
      return new Promise<boolean>((resolve, reject) => {
        resolve(true);
        reject(false);
      });
    }).catch(() => {
      alert(`Logging Error. Check ${identifier}`);
    });
  }
}