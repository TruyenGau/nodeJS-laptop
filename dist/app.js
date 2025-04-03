"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
// require('dotenv').config();
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send('hello worddddd truyen dep trai quas di ');
});
app.listen(PORT, () => {
    console.log(`my app running :  ${PORT}`);
});
//# sourceMappingURL=app.js.map