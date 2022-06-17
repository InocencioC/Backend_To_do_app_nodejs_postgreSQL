const { request, response } = require("express");

const express = require(express);

const allTodos = [{ nome: "aaa", status: false }];
const todosRoutes = express.Router();

//CREATE
todosRoutes.post("/todos", (request, response) => {
    const { name } = response.body;
    allTodos.push({name, status: false});
    return response.status(201).json(allTodos)
});
//READ

//U

//DELETE
todosRoutes.post()