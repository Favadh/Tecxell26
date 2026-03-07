import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    eventName:{
        type:[String]
    },
    type:{
        type:String,
        required:true
    },
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;