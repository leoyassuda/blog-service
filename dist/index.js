"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("reflect-metadata");
require("./infrastructure/ioc");
const server_1 = __importDefault(require("./server"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const PostRouter_1 = __importDefault(require("@routers/PostRouter"));
const UserRouter_1 = __importDefault(require("@routers/UserRouter"));
const database_1 = __importDefault(require("./infrastructure/database"));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'http://localhost';
(async () => {
    server_1.default.get('/', (req, res) => {
        res.send('Hello Blog Service');
    });
    server_1.default.use((0, cors_1.default)({
        origin: [`${HOST}:${PORT}`],
    }));
    server_1.default.use('/api/posts', PostRouter_1.default);
    server_1.default.use('/api/users', UserRouter_1.default);
    server_1.default.use((req, res) => {
        res.status(404);
    });
    server_1.default.listen(PORT, () => {
        console.log(`Server working on ${HOST}:${PORT}`);
    });
})()
    .then(async () => {
    await database_1.default.$connect();
})
    .catch(async (err) => {
    console.error(err);
    await database_1.default.$disconnect();
    process.exit(1);
});
