const validateEnrollement=(req,res,next)=>{
const {student_name,course_id} =req.body

if(!student_name||course_id){
    return res.status(400).json({
        message:"student_id and course_id required"
    })
}
next()
}
export default validateEnrollement;