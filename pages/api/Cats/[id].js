import dbConnect from "../../../utils/dbConnect";
import Cat from "../../../models/Cat";

dbConnect();

export default async (req, res) => {

    const { method, query: { id } } = req;

    switch(method) {
        case 'GET': {
            try {
                const cats = await Cat.findById(id); 

                res.status(200).json({data: cats})
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