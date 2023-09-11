"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const database_1 = __importDefault(require("src/infrastructure/database"));
let PostRepository = class PostRepository {
    constructor() {
        this.prismaClient = database_1.default;
    }
    async create(post) {
        const { text, user } = post;
        const createdPost = this.prismaClient.post.create({
            data: {
                text,
                user: {
                    connect: {
                        id: user === null || user === void 0 ? void 0 : user.id,
                    },
                },
            },
            include: {
                user: true,
            },
        });
        return createdPost;
    }
    async findAll() {
        return this.prismaClient.post.findMany({
            include: {
                user: true,
            },
        });
    }
    async findById(id) {
        return this.prismaClient.post.findFirst({
            where: {
                id,
            },
            include: { user: true },
        });
    }
    async update(id, post) {
        return this.prismaClient.post.update({
            where: {
                id,
            },
            include: {
                user: false,
            },
            data: {
                text: post.text,
            },
        });
    }
    async delete(id) {
        this.prismaClient.post.delete({
            where: {
                id,
            },
        });
    }
};
PostRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], PostRepository);
exports.default = PostRepository;
