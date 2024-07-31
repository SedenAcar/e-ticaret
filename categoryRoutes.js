//endpointler
import express from 'express';
import * as categoryController from '../controllers/categoryController.js';

const router = express.Router()

function control(req, res, next){
    console.log(req.params)
    next()
}

router.get('/', categoryController.getAllCategories);
//kategori detayı görüntüleme ekle
router.post('/', categoryController.createCategory);
router.put('/:id', control, categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

export default router;

