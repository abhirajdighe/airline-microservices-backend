const {AirportService} = require('../services/index');

const airportService = new AirportService();


const create = async(req,res)=>{
    try{
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully created the airport',
            error:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create the airport',
            error:error
        })
    }
}

const destroy = async (req,res)=>{
    try{
        const airport = await airportService.destroy(req.params.id);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully deleted the airport',
            error:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the airport',
            error:error
        })
    }
}

const update = async (req,res)=>{
    try{
        const airport = await airportService.update(req.params.id,req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully updated the airport',
            error:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the airport',
            error:error
        })
    }
}

const get = async (req,res)=>{
    try{
        const response = await airportService.get(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetch the Airport',
            error:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the airport',
            error:error
        })
    }
}

module.exports={
    get,
    create,
    destroy,
    update,
}