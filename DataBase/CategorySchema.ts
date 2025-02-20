import mongoose, { Schema } from 'mongoose'
import { EcomCategory } from '../model/EcomCategory'

const CatagorySchema = new Schema<EcomCategory>({

    name: { type: String, required: true, lowercase: true },
    description: { type: String, required: true, trim: true },
    logo: { type: String },
    IsActive: { type: Boolean }

}, { timestamps: true })

export const Category = mongoose.model<EcomCategory>("catagory", CatagorySchema)