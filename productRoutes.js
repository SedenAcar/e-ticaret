import express from 'express';
import * as productController from '../controllers/productController.js';

const productrouter = express.Router()

productrouter.get('/', productController.getAllProduct);
productrouter.post('/', productController.createProduct);
productrouter.put('/:id', productController.updateProduct);
productrouter.delete('/:id', productController.deleteProduct);

export default productrouter;
