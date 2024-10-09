import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({

    orderId:{
        type:Number,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },

    productName:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    status:{
        type:String,
        required:true
    },

    date:{ 
        type:Date,
        required:true
    }

})

const OrderModel = mongoose.model("fooditem",foodSchema);

export default OrderModel;