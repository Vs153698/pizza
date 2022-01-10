import dbConnect from '../../../utilities/mongo'
import Order from '../../../models/Order'

const handler = async(req,res)=>{
    const {method, query:{id}} = req;
    dbConnect()
    if (method === "GET") {
        try {
            const pizzas = await Order.findById(id)
            res.status(200).send(pizzas)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === "PUT") {
        try {
            const orderupdate = await Order.findByIdAndUpdate(id,req.body,{new:true})
            res.status(201).send(orderupdate)
            
        } catch (error) {
            res.status(500).send(error)
            
        }
    }
    if (method === "DELETE") {
        
    }
}
export default handler;