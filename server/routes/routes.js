import express from 'express';
import orderControllers from '../controllers/orderControllers.js';

const Router = express.Router()



Router.get("/orders",orderControllers.getOrders)

Router.get("/orders/:id",orderControllers.getOrderById)

Router.post("/orders/add",orderControllers.createOrder)

Router.put("/orders/:id",orderControllers.updateOrderById)

Router.delete("/orders/:id",orderControllers.deleteOrderById)

export default Router;