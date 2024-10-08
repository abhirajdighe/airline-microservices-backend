const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            error: {}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            error: error
        })
    }
}

// DELETE -> /city/:id
const destroy = async(req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
            error: {}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the city',
            error: error
        })
    }
}

// GET -> /city/:id
const get = async(req,res)=>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetch the city',
            error: {}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the city',
            error: error
        })
    }
    
}

// Patch / PUT -> /city/:id
const update =async(req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetched the city',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the city',
            error: error
        })
    }
    
}

const getAll = async (req,res)=>{
    try{
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'Successfully fetched all cities',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the cities',
            error: error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}