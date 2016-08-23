#Express Decorate

###Usage:

```javascript
import { ExpressDecorate, IExpressDecorateOptions } from 'express-decorate'
const OPTS:IExpressDecorateOptions = {
    ctrlDir: `${__dirname}/api`, // Required
    extension: 'js', // Optional - defaults to 'js'
    ctrlLoadRecursive: true, // Optional - defaults to true - set to false if there are no subdirectories in your controllers directory
    ctrlIgnore: 'IgnoreThisController', // Optional - NOT TESTED - @type {string|RegExp}
    mergeParams: true, // Optional - defaults to true - access params used in @Controller in Express's req.params object
    routeConfig: null, // Optional - defaults to null - Any error handling or routes not included in your API - this should be a function that takes express.Application as an argument
    debug: true // Optional - defaults to false - Show stack trace on caught exceptions
}

new ExpressDecorate(OPTS);
```

###API:

```javascript
import { Controller, GET } from 'express-decorate'

@Controller('/api/controller/:name')
export class ApiController
{
    @GET('/:testParam')
    public async Get(req, res, next)
    {
        return res.json({ success: true, controllerNameParam: req.params.name, testParam: req.params.testParam });
    }
}
```
