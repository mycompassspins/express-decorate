# express-decorate

[![Build Status](https://travis-ci.org/mycompassspins/express-decorate.svg?branch=master)](https://travis-ci.org/mycompassspins/express-decorate)
[![Coverage Status](https://coveralls.io/repos/github/mycompassspins/express-decorate/badge.svg?branch=master)](https://coveralls.io/github/mycompassspins/express-decorate?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-v18.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

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
    routeConfig: null, // Optional - defaults to null - Any error handling or routes not included in your API - this should be a function that takes express.Application as an argument
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
