const { request } = require('express');
const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');

const app = express();

app.use(express.json())

app.get("/cursos", (request , response) => {
    const query = request.query;
    console.log(query)
    return response.json(["curso 1","curso 2","curso 3"]);
})


/*Route Params*/
app.post("/Route/:id/:teste", (request , response) => {
    const {id, teste} = request.params;
    return response.json(["curso 1","curso 2","curso 3","curso 4",]);
})

/*Body Params*/
app.post("/cursos", (request , response) => {
    const body = request.body;
    console.log(body)
    return response.json(["curso 1","curso 2","curso 3","curso 4",]);
})

app.put("/cursos", (request , response) => {
    return response.json(["curso 6","curso 2","curso 3","curso 4",]);
})

app.patch("/cursos", (request , response) => {
    return response.json(["curso 1","curso 7","curso 3","curso 4",]);
})

app.delete("/cursos ", (request , response) => {
    return response.json(["curso 6","curso 3","curso 4",]);
})

app.listen(3333)