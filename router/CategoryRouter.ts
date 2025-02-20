import { Router, Request, Response, response } from "express";
import * as Category from '../controllers/CategoryController'

const CategoryRouter: Router = Router();

/**
 * usage :Get All Category
 * methods :GET
 * params : not - params
 * url : http://127.0.0.1:6666/category
 */


CategoryRouter.get('/', async (request: Request, response: Response) => {
    await Category.getAllCategory(request, response)
})

/**
 * usage :Get a Category
 * method:GET
 * params :CategortID
 * url : http://127.0.0.1:6666/category/categoryID
 * 
 */

CategoryRouter.get('/:id', async (request: Request, response: Response) => {
    await Category.getCategory(request, response)
})

/**
 * usage : Create a Category
 * methods : POST,
 * params : category_name , category_description , category_logo , category_isActive 
 * url : http://127.0.0.1:6666/category
 */

CategoryRouter.post('/', async (request: Request, response: Response) => {
    await Category.CreateCategory(request, response)
})

/**
 * usage : Update a Category 
 * methods:PUT,
 * params:category_name , category_description , category_logo , category_isActive , CategoryID
 * url : http://127.0.0.1:6666/category/categoryID
 * 
 */

CategoryRouter.put("/:id", async (request: Request, res: Response) => {
    await Category.UpdateCategory(request, response)
})


/**
 * usage : Delete Category 
 * methods:DELETE
 * Params:CategoryID
 * url : http://127.0.0.1:6666/category/categoryID
 * 
 */


CategoryRouter.delete("/:id", async (request: Request, res: Response) => {
    await Category.DeleteCategory(request, response)
})




export default CategoryRouter;