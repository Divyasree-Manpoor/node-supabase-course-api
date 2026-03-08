import express from "express";
import supabase from "../supabaseClient";
import validateEnrollement from "../middleware/validateEnrollement";

const router=express.Router()

router.get("/courses" ,async(req,res)=>{

    const{data,error}=await supabase
    .from("courses")
    .select("*")
    if(error) {
    return res.status(500).json(error)
    }
      res.json(data)

})

router.post("/enroll",validateEnrollement,async(req,res)=>{
    const{student_name,course_id}=req.body
    const{data,error}=await supabase
    .from ("enrollements") 
    .insert([{
        student_name,
        course_id
    }])
    if(error){
        return res.status(500).json(error)
    }
    res.json(data)
})

router.get("/courses/:id/enrollments",async(req,res)=>{
    const{id}=req.params

    const{data,error}=await supabase
    .from("enrollements")
    .select("*")
    .eq("courses_id",id)

    if(error){
        return res.status(500).json(error)
    }
    res.json(data)
})
export default router