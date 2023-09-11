"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("@controllers/UserController"));
const express_1 = require("express");
const postRouter = (0, express_1.Router)();
const controller = new UserController_1.default();
postRouter.post('/', controller.create);
postRouter.get('/', controller.findAll);
postRouter.get('/:id', controller.findById);
postRouter.put('/:id', controller.update);
postRouter.delete('/:id', controller.delete);
exports.default = postRouter;
