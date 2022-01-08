
import Product from "../../../models/Product";
import dbConnect from "../../../utilities/mongo";

export default async function handler(req, res) {

    dbConnect()
    const {method,query:{id}} = req;
    if (method === "GET") {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "PUT") {
        try {
            const product = await Product.updateOne({_id:id})
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "DELETE") {
        try {
            const product = await Product.deleteOne({_id:id})
            res.status(200).json('deleted')
        } catch (error) {
            res.status(500).json(error)
        }
    }
  }