const { Router } = require ("express");
const { getNameHandler, getRecipeIdHandler } = require("../handlers/recipesHandlers");
const { createRecipeHandler } = require ("../handlers/postHandlers");

const recipesRouter = Router();

recipesRouter.get("/:id", getRecipeIdHandler);

recipesRouter.get("/", getNameHandler);

recipesRouter.post("/", createRecipeHandler);

module.exports= recipesRouter;