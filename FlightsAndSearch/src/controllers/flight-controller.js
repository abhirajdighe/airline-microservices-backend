const {FlightService} = require('../services/index');
const { SuccessCodes } = require("../utils/error-codes");
const flightService = new FlightService();

const create = async (req,res)=>{
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:'Successfully created a flight',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        })
    }
}

const getAll = async (req,res)=>{
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'Successfully fetched the flights',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        })
    }
}


const get = async (req,res)=>{
    try{
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'Successfully fetched the flight',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
        })
    }
}

const update = async(req,res)=>{
    try{
        const response = await flightService.updateFlights(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'Successfully updated the flight',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the flight',
            err:error
        })
    }
}

module.exports={
    create,
    getAll,
    get,
    update,
}