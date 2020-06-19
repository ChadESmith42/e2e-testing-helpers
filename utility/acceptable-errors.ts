import { browser, logging } from 'protractor';

describe('End-to-end test for something in development', () => {

  beforeEach(async () => {
   // some code
  });
  
  describe('Test suites here ...', async () => {
   // all of your tests
  });

  /**
  * After each test, check the browser logs for SEVERE warnings.
  * There are a few "acceptable errors" due to on-going development. Those
  * errors are stored in browser.params.acceptableErrors[] as error.message values.
  * If new acceptable errors are identified, add the error there to keep all tests passing.
  */
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    let logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const acceptableErrors = browser.params.acceptableErrors; // Get expected/acceptable errors from protractor.config
    if (logs) {
      for (const l of logs) {
        const acceptableError = acceptableErrors.filter(x => x === l.message); // Always returns an array, could be empty;
        if (acceptableError.length > 0) {
          logs = logs.filter(log => log.message !== acceptableError[0]);
        }
      }
    }
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
