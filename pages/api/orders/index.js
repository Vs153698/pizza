import dbConnect from '../../../utilities/mongo'
import Order from '../../../models/Order'
const handler = async (req, res) => {
    dbConnect()
    const { method } = req
    if (method === "GET") {
        try {
            const orders = await Order.find()
            res.status(201).send(orders)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === "POST") {
        try {
            const order = await Order.create(req.body)
            res.status(201).send(order)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
export default handler;
