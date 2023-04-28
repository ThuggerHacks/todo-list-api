import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect("mongodb+srv://ThuggerHacks:$Thugger11@cluster0.ngjvety.mongodb.net/?retryWrites=true&w=majority").then(data => {
        console.log("Data base running!")
    }).catch( error => {
        console.log(error)
    })
}