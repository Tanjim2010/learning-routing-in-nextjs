import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const p = await params;
    const singleData = await dbConnect("coffee").findOne({ _id: new ObjectId(p.id) })

    return Response.json(singleData)
}
export async function DELETE(req, { params }) {
    const id = await params.id;
    const response = await dbConnect("coffee").deleteOne({ _id: new ObjectId(id) });

    return Response.json(response);
}
export async function PATCH(req, { params }) {

    const p = await params;
    const filter = { _id: new ObjectId(p.id) }
    const postedData = await req.json()
    const updatedResponse = await dbConnect("coffee").updateOne(filter, { $set: { ...postedData } }, { upsert: true })

    return Response.json(updatedResponse)
}
