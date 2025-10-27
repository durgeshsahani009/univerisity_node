
import mongoose from "mongoose";
const _model = new mongoose.Schema({
  name:{type:String, require:true, unique: true },
  age:{type:Number, require:true},
  program:{type:String, require:true} 
}, {timestamps:true})

export default mongoose.model('students', _model);