[![npm version](https://badge.fury.io/js/@qavajs%2Fcli.svg)](https://badge.fury.io/js/@qavajs%2Fcli)

## @qavajs/wdio-service-adapter

Adapter for wdio services to use it in qavajs framework
          
`npm install @qavajs/wdio-service-adapter`

### WDIO Adapter
You can use existing wdio services e.g selenium-service, appium-service in qavajs framework.
Service definition can be string with module path or configuration tuple [modulePath, options, capabilities, config]

simple use:
```javascript
const wdioService = require('@qavajs/wdio-service-adapter');

module.exports = {
    default: {
        service: [
            wdioService('@wdio/selenium-standalone-service')
        ],
    }
}
```

use with params
```javascript
const wdioService = require('@qavajs/wdio-service-adapter');

module.exports = {
    default: {
        service: [
            wdioService([
                '@wdio/appium-service',
                {
                    args: {
                        chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')
                    }
                }
            ])
        ],
    }
}
```
## Hook mapping

 | wdio       | qavajs |
|------------|--------|
| onPrepare  | before |
 | onComplete | after  |

## Limitations
- Currently only onPrepare and onComplete hooks are translated.
