const Card = require("../models/Cards");

exports.insert=async(req,res)=>{
    try {
        let {name,description,interest,socials}=req.body;
        let uid=req.cookies.uid;
        if(!name || !description){
            return res.status(400).json({msg:"Please fill all fields"});
            }
        let card = new Card({
            name:name,
            description:description,
            interest:interest,
            socials:socials,
            uid:uid
        });
        await card.save();
        //console.log(card);
        res.status(201).json(card);
    } catch (error) {
        console.error(error);
    }
}
exports.select=async(req,res)=>{
    try {
        let uid=req.cookies.uid;
        let cards =await Card.findOne({uid:uid});
        if (!cards) {
            res.status(404).json({message:"No Cards Found"});
        }
        else{
            res.status(200).json(cards);
            }
        
    } catch (error) {
        console.error(error);
    }
}