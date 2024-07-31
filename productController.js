import Product from '../models/Product.js';

//bütünürünleri getir
export const getAllProduct = async (req, res) => {
    try{
        const products = await Product.find().populate('category');
        console.log()
        res.json(products);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

//yeni ürün oluştur
export const createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.productName,
        description: req.body.productDescription,
        price: req.body.productPrice,
        stock: req.body.productStock,
        category: req.body.productCategory,
        features: req.body.productFeatures
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//ürün güncelle 
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(updatedProduct);
    }   catch (error){
            res.status(400).json({message:error.message});
    }
};

//ürün silme
export const deleteProduct = async (req, res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json({message: 'Product deleted successfully!'});
    }catch(error){
        res.status(500).json({message: error.message})
    }
};