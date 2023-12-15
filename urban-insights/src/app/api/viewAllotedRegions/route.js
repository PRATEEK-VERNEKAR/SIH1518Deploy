import Border from "../../../models/borderModel";
import {connect,disconnect} from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        connect();

        const {regionIDs}=await req.json();

        console.log(regionIDs);

        const allMatchRegions=await Border.find({regionID:{$in:regionIDs}});

        console.log(allMatchRegions.length);

        return NextResponse.json({
            allMatchRegions,
            success:true
        })
    }
    catch(err){
        console.log("Error fetching alloted regions");
        return NextResponse.json({
            success:false,
            message:"Error fetching alloted regions"
        },{status:500})
    }
}