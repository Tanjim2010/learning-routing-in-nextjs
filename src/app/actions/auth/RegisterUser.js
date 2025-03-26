"use server"

import dbConnect from "@/lib/dbConnect";

export const RegisterUser = async (payload) => {
    try {
        // need to check username is unique was given
        const result = await dbConnect('userDB').insertOne(payload);
        return result;
    } catch (error) {
        console.log(error)
        return null
    }
};
