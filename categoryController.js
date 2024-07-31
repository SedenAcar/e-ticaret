import Category from '../models/Category.js';

//bütün kategorileri getir
export const getAllCategories = async (req, res) => {
    if(!req.user){
        res.status(401).send('401 Unauthorized')
        return;
    }
    try{
        const categories = await Category.find();
        res.json(categories);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

//yeni kategori oluştur
export const createCategory = async (req, res) =>{
    console.log(req.body)
    const category = new Category({
        name: req.body.name,
        description: req.body.categoryDescription,
        parentCategory: req.body.parentCategory
    });

    try{
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    }catch (error){
        res.status(400).json({message: error.message})
    }
};

//kategori güncelle 
export const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(updatedCategory);
    }   catch (error){
            res.status(400).json({message:error.message});
    }
};

//kategori silme
export const deleteCategory = async (req, res) =>{
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.json({message: 'Category deleted successfully!'});
    }catch(error){
        res.status(500).json({message: error.message})
    }
};