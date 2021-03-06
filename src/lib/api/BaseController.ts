/**
 * Created by Justin on 8/17/16.
 */

/**
 * @description
 * Every controller must either extend this BaseController or have `public $routes:IControllerRoute` declared in order
 * to have its routes loaded. This happens at runtime via the EndpointRouting decorators.
 */
export class BaseController
{
    public $routes:any;
    constructor() {}
}
