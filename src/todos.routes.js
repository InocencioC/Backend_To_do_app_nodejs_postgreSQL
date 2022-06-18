const { response } = require("express");
const express = require("express");

const allTodos = [{ nome: "aaaa", status: false }];
const todosRoutes = express.Router();

//CREATE
todosRoutes.post("/todos", (request, response) => {
    const { name } = request.body;
    allTodos.push({name, status: false });
    return response.status(201).json(allTodos);
});
//READ
todosRoutes.get("/todos", (request, response) => {
    return response.status(200).json(allTodos);
});
//U

//DELETE
module.exports = todosRoutes;