const {request , response, json } = require("express");
const express = require("express");
const { v4:uuidv4 } = require("uuid");

const app = express();
app.use(json());

const arrayUsers = [];

function verifyIfExistsUserName(request , response , next){

}

app.post("/users", (request , response)=>{
    const { name , userName } = request.body;

    const arrayUSersAlreadyExists = arrayUsers.some(
        (arrayUser) => arrayUser.userName === userName
    );

    if (arrayUSersAlreadyExists){
        return response.status(400).json({ error: "User name already exists!" })
    }

    arrayUsers.push({
        id:uuidv4(),
        name,
        userName,
        todos:[]
    });
    return response.status(201).send();
});

app.get("/todos", ( request , response ) =>{
    return response.json(arrayUsers)
});

app.listen(3333);