import { NextRequest } from "next/server";

export default function middleware(req:NextRequest){
    // console.log(req);
    return console.log("middleware")
}

export const config = {
    matcher:["/create-post","/api/test"],
}