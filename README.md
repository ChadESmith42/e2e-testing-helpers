# e2e-testing-helpers
Helper files for end-to-end (e2e) testing using Jasmine, Protractor, and Angular 8+

## Acceptable Errors utility:
### Use case: 
We had an on-going API error that was being developed in parallel with some of the front-end code. Rather than having the tests fail
due to the API returning a 401 or 404, we decided to filter that response from our error checking that occurs after each test.

Further revision identified two 3rd-party APIs that were hit-or-miss during development.

Add the error message for each error you wish to filter to the `params` property inside the `protractor.congif` file.

```ts
exports.config = { 
 // config settings omitted for brevity
 params: { 
    data: {
      // testing variables
    },
    acceptableErrors: [ 
    'https://somewebsite.com/ - Failed to load resource: the server responded with a status of 401 (Unauthorized)',
    'https://anothersite.com/v1/api/doesnt-work - Failed to load resource: the server responded with a status of 404 ()'
    ]
 }
}
```

The method filters the existing browser logs for those specific messages. The remaining errors are returned and evaluated for violating the log level rule in place. This allows the tests to pass, when a non-essential API call would otherwise fail the test.
