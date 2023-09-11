"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, text, user, createdAt) {
        this.id = id;
        this.text = text;
        this.user = user;
        this.createdAt = createdAt;
    }
}
exports.default = Post;
