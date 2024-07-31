import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    customerName: {type: String, require: true},
    customerEmail: {type: String, require: true},
    items: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Beklemede', 'İşleniyor', 'Gönderildi', 'Tamamlandı', 'İptal Edildi'], default: 'Beklemede' },
    shippingAddress: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
      country: { type: String }
    },
    paymentMethod: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });

  const Order = mongoose.model('Order', OrderSchema);
  export default Order;