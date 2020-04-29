import { Logging } from './logging';

/**
 * Returns a Promise<boolean> of true.
 */
export class PromiseHelper {
  public CompletePromise(): PromiseLike<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    }).catch(() => {
      alert(`Could not create true promise. Odd.`);
    });
  }

  /**
   * Returns a Promise<boolean> of false.
   * @param identifier Text description of code block that failed (component, method, etc).
   * @param data OPTIONAL Array of data to be logged. Type is `any`. If not supplied, an empty array will be passed into the logging.
   */
  public HandleError(identifier: string, data?: any[]): PromiseLike<any> {
    return new Promise((resolve, reject) => {
      const inputData: any[] = [];
      if(data) { inputData.push(data) }
      Logging.prototype.LogError(identifier, inputData);
      resolve(false);
    }).catch(() => {
      alert(`Could not handle the error handling.`);
    });
  }
}