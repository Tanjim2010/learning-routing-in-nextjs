"use server"
import dbConnect from "@/lib/dbConnect"

export const postSingleProduct = async (postedData) => {
    try {
        const result = await dbConnect("products").insertOne(postedData)
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString() 
        }
    } catch (error) {
        console.log(error)
        return null
    }

}