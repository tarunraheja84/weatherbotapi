"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PswrdSchema = void 0;
const mongoose = require("mongoose");
exports.PswrdSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=pswrdSchema.models.js.map