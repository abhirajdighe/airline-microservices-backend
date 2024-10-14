const TicketService = require('../services/email-service');

const create = async (req,res)=>{
    try{
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            message:'Successfully register an email reminder',
            err:{},
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            data:response,
            message:'Failed to register an email reminder',
            err:error,
        })
    }
}

module.exports ={
    create,
}