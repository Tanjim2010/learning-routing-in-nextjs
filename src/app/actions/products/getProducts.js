"use server"

import dbConnect from "@/lib/dbConnect"

export const getProducts = async () => {
    try {
        const data = await dbConnect("products").find({}).toArray()
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}