import  Order from '../models/Order.js';

//siparişleri görüntüle
export const getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find().populate('items.product')
        res.json(orders);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

//siparişi getir
export const getOrder = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id).populate('items.product')
        res.json(order);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

//sipariş oluştur
export const createOrder = async (req, res) =>{
    const order = new Order(req.body);

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (error){
        res.status(400).json({message: error.message});
    }
};

//Sipariş düzenleme
export const updateOrderStatus = async (req, res) => {
    try{
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                {status: req.body.status},
                {new: true}
            );
            res.status(201).json(updatedOrder);
    }catch (error){
            res.status(400).json({message: error.message});
    }
};

