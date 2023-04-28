import express from "express";
import  cors  from "cors";

import { connection } from "./connection";
import { todo } from "./model";
connection();
const app = express();

app.use(express.json());
app.use(cors())

app.post("/todo",async function(req,res){

    try {
        const list = new todo({title:req.body.title});
        const save = await list.save(list);

        return res.json(save);
    } catch (error) {
        return res.json(error);
    }

});


app.get("/todo",async function(req,res){

    try {
        const list = await todo.find();
        return res.json(list);
    } catch (error) {
        return res.json(error);
    }

});


app.get("/todo/:_id",async function(req,res){

    try {
        const list = await todo.findOne({_id:req.params._id});
        return res.json(list);
    } catch (error) {
        return res.json(error);
    }

});

app.delete("/todo/:_id",async function(req,res){

    try {
        const list = await todo.deleteOne({_id:req.params._id});
        return res.json(list);
    } catch (error) {
        return res.json(error);
    }

});

app.put("/todo/:_id",async function(req,res){

    try {
        const list = await todo.updateOne({_id:req.params._id},{title:req.body.title});
        return res.json(list);
    } catch (error) {
        return res.json(error);
    }

});


app.listen(8000, () => {
    console.log("Server running");
})