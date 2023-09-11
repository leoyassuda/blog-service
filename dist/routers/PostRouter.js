"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("@controllers/PostController"));
const postRouter = (0, express_1.Router)();
const postController = new PostController_1.default();
postRouter.post('/', postController.create);
postRouter.get('/', postController.findAll);
postRouter.get('/:id', postController.findById);
postRouter.put('/:id', postController.update);
postRouter.delete('/:id', postController.delete);
exports.default = postRouter;
