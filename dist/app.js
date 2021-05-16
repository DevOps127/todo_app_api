"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// load env
dotenv_1.default.config();
// create server on port 3000
const app = express_1.default();
const port = process.env.PORT;
app.get("/", (_req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map