import { Router, Request, Response, response } from "express";
import * as SubCategory from '../controllers/SubCategoryControlle'

const SubCategoryRouter: Router = Router();

/**
 * usage:Get All SubCategory
 * methods:GET
 * params:not - params
 */

SubCategoryRouter.get('/SubCategory', async (request: Request, response: Response) => {
    await SubCategory.getAllSubCategory(request, response)
})

/**
 * usage: Get a SubCategory
 * methods:GET
 * params:CategortID
 */

SubCategoryRouter.get('/SubCategory/:id', async (request: Request, response: Response) => {
    await SubCategory.getSubCategory(request, response)
})

/**
 * usage:Create a SubCategory 
 * mathods : POST
 * params: name , description , logo , isActive
 */

SubCategoryRouter.post('/SubCategory', async (request: Request, response: Response) => {
    await SubCategory.CreateSubCategory(request, response)
})

/**
 * usage:Update a SubCategory 
 * mathods : PUT
 * params: name , description , logo , isActive  ,SubCategoryID
 */

SubCategoryRouter.put("/SubCategory/:id" , async(request:Request , res:Response)=>
{
    await SubCategory.UpdateSubCategory(request,response)
})

/**
 * usage:Delete a SubCategory 
 * mathods : Delete
 * params: SubCategoryID
 */


SubCategoryRouter.put("/SubCategory/:id", async (request: Request, res: Response) => {
    await SubCategory.DeleteSubCategory(request, response)
})




export default SubCategoryRouter;