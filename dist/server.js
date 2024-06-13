"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.static(path_1.default.join('/scripts', '../public/scripts')));
app.get('/', (request, response) => {
    response.send('Hello, Typescript.... demo text!');
});
app.listen(port, () => {
    console.log(`server running on localhost:${port}`);
});
//# sourceMappingURL=server.js.map