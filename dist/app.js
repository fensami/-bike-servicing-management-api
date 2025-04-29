"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import router from "./app/routes";
// import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
const http_status_1 = __importDefault(require("http-status"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandlers_1 = __importDefault(require("./app/middlewares/globalErrorHandlers"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to Bike Servicing Management"
    });
});
// app.use('/api/v1/user', userRoutes)
// app.use('/api/v1/admin', adminRoutes)
app.use('/api', routes_1.default);
app.use(globalErrorHandlers_1.default);
app.use((req, res, next) => {
    console.log(req);
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "api not found !",
        error: {
            path: req.originalUrl
        }
    });
});
exports.default = app;
