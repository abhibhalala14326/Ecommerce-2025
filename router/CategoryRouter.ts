import { Router, Request, Response, response } from "express";
import * as Category from '../controllers/CategoryController'
import { request } from "node:http";

const CategoryRouter: Router = Router();

/**
 * usage:Get All Category
 * methods:GET
 * params:not - params
 */

CategoryRouter.get('/category', async (request: Request, response: Response) => {
    await Category.getAllCategory(request, response)
})

/**
 * usage: Get a Category
 * methods:GET
 * params:CategortID
 */

CategoryRouter.get('/category/:id', async (request: Request, response: Response) => {
    await Category.getCategory(request, response)
})

/**
 * usage:Create a Category 
 * mathods : POST
 * params: name , description , logo , isActive
 */

CategoryRouter.post('/category', async (request: Request, response: Response) => {
    await Category.CreateCategory(request, response)
})

/**
 * usage:Update a Category 
 * mathods : PUT
 * params: name , description , logo , isActive  ,CategoryID
 */

CategoryRouter.put("/category/:id" , async(request:Request , res:Response)=>
{
    await Category.UpdateCategory(request,response)
})

/**
 * usage:Delete a Category 
 * mathods : Delete
 * params: CategoryID
 */


CategoryRouter.put("/category/:id", async (request: Request, res: Response) => {
    await Category.DeleteCategory(request, response)
})




export default CategoryRouter;