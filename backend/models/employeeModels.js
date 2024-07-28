import mongoose, { mongo } from "mongoose";

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Employee = mongoose.model('Employee', employeeSchema);

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
export const User = mongoose.model('User',userSchema)