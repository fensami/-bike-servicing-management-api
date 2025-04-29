"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post('/', bike_controller_1.bikeController.createBike);
router.get('/', bike_controller_1.bikeController.getAllBikesFromDb);
router.get('/:id', bike_controller_1.bikeController.getSingleBikeFromDb);
// router.put('/:id', customerController.customerDataUpdated)
// router.delete('/:id', customerController.customerDeleteFromDb)
exports.BikeRoutes = router;
