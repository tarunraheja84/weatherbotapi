"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=pswrdSchema.models.js.map