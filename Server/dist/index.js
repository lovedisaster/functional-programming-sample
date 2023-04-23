"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MockData_1 = require("./MockData");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.json());
app.get("/data", (req, res) => {
    res.send(MockData_1.mockData);
});
app.get("/sample-address", (req, res) => {
    res.send(MockData_1.mockData2);
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map