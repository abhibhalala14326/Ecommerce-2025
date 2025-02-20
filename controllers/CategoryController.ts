import { Category } from "../DataBase/CategorySchema";
import  { Request, Response } from "express";
import { EcomCategory } from "../model/EcomCategory";


/**
 * @usage : Get All SubCaterory
 * @methods : GET
 * @params : not - params
 * 
 */

export const getAllCategory = async (request: Request, response: Response) => {
    try {
        const thegetCategory: EcomCategory[] | null | undefined = await Category.find()

        return response.status(200).json({
            data: thegetCategory,
            msg: "Get all Category"
        })
    } catch (error) {
        console.error("Error :", error);
        return response.status(500).json({
            msg: "Failed to  categories",

        });
    }
}



/**
 * @usage : Get A Caterory
 * @methods : GET
 * @params : CategoryID
 * 
 */
export const getCategory = async (request: Request, response: Response) => {
    try {
        let {id} = request.params
        const thegetCategory: EcomCategory[] | null | undefined = await Category.findById(id)

        return response.status(200).json({
            data: thegetCategory,
            msg: "Get all Category"
        })
    } catch (error) {
        console.error("Error :", error);
        return response.status(500).json({
            msg: "Failed to  categories",

        });
    }

}

/**
 * usage : Create a Category
 * methods : POST,
 * params : name , description , logo , isActive 
 */

export const CreateCategory = async(request:Request , response:Response)=>
{
    try {
        let { name, description, logo, isActive } = request.body;

        const newCategory: EcomCategory | null | undefined = await new Category({
            name: name, description: description, logo: logo, isActive: isActive
        }).save()

        return response.status(201).json(
            {
                data: newCategory,
                msg:'Category create successfully'
            }
        )
    } catch (error) {
        console.error("Error creating category:", error);
        return response.status(500).json({
            msg: "Failed to create Category",
        });
    }
    
}

/**
 * usage : Update a Category 
 * methods:PUT,
 * params:name , description , logo , isActive  , CategoryID
 */

export const UpdateCategory = async(request:Request , response:Response)=>
{
    try {
        let { id } = request.params;

        //  Check  category
        const CheckCategory = await Category.findById(id);
        if (!CheckCategory) {
            return response.status(400).json({
                msg: "Category not found",
            });
        }

        // Update the category
        let { name, description, isActive, logo } = request.body;

        const theUpdateCategoty: EcomCategory | null | undefined = await Category.findByIdAndUpdate(id,
            { name, description, logo, isActive },
            { new: true }
        )

        return response.status(201).json({
            data:theUpdateCategoty,
            msg:'Category updated successfully'
        })
    } catch (error) {
        console.error("Error updating category:", error);
        return response.status(500).json({
            msg: "Failed to update Category",
           
        });
    }
   

}

/**
 * usage : Delete Category 
 * methods:DELETE
 * Params:CategoryID
 */

export const DeleteCategory = async(request:Request , response:Response)=>
{
    try {
        let { id } = request.params

        //  Check  Category
        const CheckCategory = await Category.findById(id);
        if (!CheckCategory) {
            return response.status(400).json({
                msg: "Category not found",
            });
        }
        const theDeleteCategory: EcomCategory | null | undefined = await Category.findByIdAndDelete(id)

        return response.status(202).json({
            data: null,
            msg: "Category is Deleted"
        })

    } catch (error) {
        console.error("Error deleting Category:", error);
        return response.status(500).json({
            msg: "Failed to delete Category",
            
        });
    }
   
}