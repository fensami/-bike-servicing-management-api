"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post('/', customer_controller_1.customerController.createCustomer);
router.get('/', customer_controller_1.customerController.getAllCustomersFromDb);
router.get('/:id', customer_controller_1.customerController.getIdFromDb);
router.put('/:id', customer_controller_1.customerController.customerDataUpdated);
router.delete('/:id', customer_controller_1.customerController.customerDeleteFromDb);
exports.customerRoutes = router;
