"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __importDefault(require("../models/order.model"));
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.default.find();
    return orders;
});
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new order_model_1.default(data);
    yield order.save();
    return order;
});
const updateOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield order_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield order_model_1.default.findByIdAndDelete(id);
});
exports.default = {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
};
