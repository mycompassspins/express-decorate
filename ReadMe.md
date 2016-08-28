# express-decorate

[![Build Status](https://travis-ci.org/mycompassspins/express-decorate.svg?branch=master)](https://travis-ci.org/mycompassspins/express-decorate)
[![Coverage Status](https://coveralls.io/repos/github/mycompassspins/express-decorate/badge.svg?branch=master)](https://coveralls.io/github/mycompassspins/express-decorate?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-v18.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)


* [Why](#why)
* [Install](#install)
* [Usage](#usage)
* [Contributing](#contributing)

#Why:

This library is based on several similar libraries available on npm, most notably [route-decorators](https://github.com/buunguyen/route-decorators). The main difference with this library is that it makes use of Express' 
detached router capabilities. In other words, this library configures Express routes like this:

```
import express = require('express');
import { Router } from 'express';

let app:express.Application = express();

// Tell Express to use the specified mountpath
// This would map to a controller which handles all requests to the specified mountpath
app.use('/mountpath/:mountPathParam', routerFunction);

// Attach specific controller actions to endpoints of the above mountpath
function routerFunction():Router
{
    let router:Router = Router({ mergeParams: true });
    router.get('/endpointPath', controller.Action);
    return router;
}
```

The benefit of the above route configuration is that, if you depend on Express' `req.originalUrl`, `req.baseUrl`, `req.path`, etc, those values
will be attached to your routes as expected. Additionally, the user can choose whether to merge mountpath parameters with endpoint parameters.
E.g., in the above example, in a controller action that handled `GET` requests to the endpoint `/:endpointParam`, that controller method would have 
access to both `req.params.mountPathParam` and `req.params.endpointParam`.

###Install:

```
$ npm install --save express-decorate
```

###Usage:

```javascript
import { ExpressDecorate, IExpressDecorateOptions } from 'express-decorate'
import express = require('express');

let APP = express();

const OPTS:IExpressDecorateOptions = {
    ctrlDir: `${__dirname}/api`, // Required
    extension: 'js', // Optional - defaults to 'js'
    ctrlLoadRecursive: true, // Optional - defaults to true - set to false if there are no subdirectories in your controllers directory
    ctrlIgnore: 'IgnoreThisController', // Optional - NOT TESTED - @type {string|RegExp}
    mergeParams: true, // Optional - defaults to true - access params used in @Controller in Express's req.params object
    routeConfig: null, // Optional - defaults to null - Any error handling or routes not included in your API
    debug: true // Optional - defaults to false - Show stack trace on caught exceptions
}

new ExpressDecorate(APP, OPTS);
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

###Contributing:

This is my first attempt at any open source library and I welcome pull requests that conform stylistically to existing code and are covered
adequately with unit tests.

####Install dependencies

`npm install && typings install`

####Build:

`gulp build`

####Test:

Test a specific file: `gulp test --file SpecToTest` (don't include path or extension)

Run all specs: `gulp test` (this command also runs `gulp build`)


