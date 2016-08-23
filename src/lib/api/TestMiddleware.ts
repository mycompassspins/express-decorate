/**
 * Created by Justin on 8/17/16.
 */

import { Request, Response, NextFunction } from 'express'

export interface IRequest extends Request { middleware:string; }
export interface IResponse extends Response {}
export interface INextFunction extends NextFunction {}

export class TestMiddleware
{
    public static async Test(req:IRequest, res:Response, next:NextFunction):Promise<any>
    {
        req.middleware = 'successful';
        return next();
    }
}
