"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const uuid_1 = require("uuid");
let PostRepositoryInMemory = class PostRepositoryInMemory {
    constructor() {
        this.posts = [
            {
                id: (0, uuid_1.v4)(),
                text: '',
            },
        ];
    }
    create(post) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        return Promise.resolve(this.posts);
    }
    findById(id) {
        throw new Error('Method not implemented.');
    }
    update(id, post) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
};
PostRepositoryInMemory = __decorate([
    (0, tsyringe_1.injectable)()
], PostRepositoryInMemory);
exports.default = PostRepositoryInMemory;
