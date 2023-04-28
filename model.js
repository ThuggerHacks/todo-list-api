import {Schema, model} from "mongoose";


const Todo = new Schema({
    title:{
        type:String,
        required:true
    }
});

const todo = model("todo",Todo);

export { todo };