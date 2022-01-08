import Product from "../../../models/Product";
import dbConnect from "../../../utilities/mongo";
export default async function handler(req, res) {
    dbConnect()
    const {method} = req;
    if (method === "GET") {
        try {
            const product = await Product.find()
            console.log(product)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "POST") {
        try {
            const product = await Product.create(req.body)
            res.status(201).send(product)
        } catch (error) {
            res.status(500).send(error)
        }
    }
  }