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
    if (method === "POST") {
        
    }
    if (method === "DELETE") {
        
    }
}
export default handler;