import { by, element } from 'protractor';
import { WebdriverBy } from 'protractor/built/locators';
import { Logging } from './logging';

export class ElementHelpers {

  /**
   * Find last element of an array of multiple matching elements.
   * @param elementId Element search criteria to match against.
   * @param typeSearch Type of search matcher. Use WebDriverBy properties to provide the correct value.
   */
  public FindLast(elementId: string, typeSearch: string) {
    let searchCriteria = `by.${typeSearch}(${elementId})`;
    return element.all(searchCriteria).then((elementArray) => {
      if (elementArray && elementArray.length > 0) {
        return elementArray.length - 1;
      }
    }).catch(([elementArray, searchCriteria]) => {
      Logging.prototype.LogError(
        'ElementHelpers.FindLast',
        [
          elementArray,
          searchCriteria
        ]
      );
    });
  }
}
