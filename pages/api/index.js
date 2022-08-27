import dbConnect from "../../utils/dbConnect";
import Cat from "../../models/Cat";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET': {
            try {
                const cats = await Cat.find({}); 

                res.status(200).json(cats)
            } catch (error) {
                res.status(400).json({success: false})
            }
        }
        break;
        case 'POST': {
            try {
                const cat = await Cat.create(req.body);
                console.log(cat);
                res.status(201).json({success: true, data: cat})
            } catch (error) {
                res.status(400).json({success: false})
                
            }
        }
        break;
        default:
            res.status(400).json({success: false})
        break;
    }
}