import express from 'express';
import * as orderController from '../controllers/orderController.js';

const orderrouter = express.Router()

orderrouter.get('/', orderController.getAllOrders);
orderrouter.get('/:id', orderController.getOrder);
orderrouter.post('/', orderController.createOrder);
orderrouter.patch('/:id/status', orderController.updateOrderStatus);
orderrouter.post('/api/orders/:id/pay')

export default orderrouter;
