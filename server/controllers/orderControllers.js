import OrderModel from '../models/oderModel.js';

const createOrder = async (req,res)=>{

    const {orderId,customerName,productName,price,quantity,location,status,date } = req.body


    try { 

        if(!orderId||!customerName||!productName||!price||!quantity||!location||!status||!date){
            return res.status(400).send("all fields are required")
        }

        const existingItem = await OrderModel.findOne({orderId})

        if (existingItem){
            return res.status(400).send("this item has already been addeed")
        }

        const newItem = new OrderModel({
            orderId,
            customerName,
            productName,
            price,
            quantity,
            location,
            status,
            date
        })

        const savedItem = await newItem.save()

        res.status(201).send({message:"order created","data":savedItem})
        
    } catch (error) {
        res.status(500).send(`error while creating order,${error.message}`)
    }
}

const getOrders = async (req,res)=>{


    try {

        const allItems = await OrderModel.find({})

        return res.status(200).send({ totalItems: allItems.length, allItems });

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getOrderById = async (req,res)=>{

 const {Id} = req.body;
    try {

        const order = await OrderModel.findOne(Id)

        if (!order){
            return res.status(400).send(`order with the id:${Id} not found`)
        }

        return res.status(200).send(order)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const updateOrderById = async (req, res) => {
    const { orderId,customerName,productName,price,quantity,location,status,date } = req.body; 
    

    try {
        if (!orderId || !customerName || !productName || !price|| !quantity || !location || !status || !date) {
            return res.status(400).send("All fields are required");
        }

        const updatedItem = await OrderModel.findOneAndUpdate(
            {orderId},
            {
            customerName,
            productName,
            price,
            quantity,
            location,
            status,
            date 
            },
            { new: true } 
        );

        if (!updatedItem) {
            return res.status(404).send("order not found");
        }

        res.status(200).send({ message: "order updated successfully", data: updatedItem });
    } catch (error) {
        res.status(500).send(`Error while updating food, ${error.message}`);
    }
}


const deleteOrderById = async (req,res)=>{

    const {Id}  = req.body;

try {
    const deletedItem = await OrderModel.findOneAndDelete(Id);

    if (!deletedItem) {
        return res.status(404).send("item not found");
    }

    return res.status(200).send("item deleted successfully");
} catch (error) {
    return res.status(500).send(error.message);
}
}





const orderControllers = { createOrder,getOrders,getOrderById,updateOrderById,deleteOrderById };

export default orderControllers;