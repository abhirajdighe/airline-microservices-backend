const CrudRepository = require('./crud-repository')
const {Airport} = require('../models/index');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport)
    }


    // async createAirport({name,cityId,address}){
    //     try{
    //         const airport =await Airport.create({name,cityId,address})
    //         return airport;
    //     }catch(err){
    //         console.log("Something went wrong in airport repository layer");
    //         throw err;
    //     }
    // }

    // async deleteAirport(airportId){
    //     try{
    //         await Airport.destroy({
    //             where:{
    //                 id:airportId
    //             }
    //         })
    //         return true;
    //     }catch(error){
    //         console.log("Something went wrong in airport repository layer");
    //         throw error;
    //     }
    // }

    // async updateAirport(airportId,data){


    //     try{
    //         const airport = await Airport.update(data,{
    //             where:{
    //                 id:airportId
    //             },
    //         })
    //         return  airport
    //     }
    //     catch(error){
    //         console.log('Something went wrong in airport repository layer');
    //         throw {error};
    //     }
    // }

    // async getAirport(airportId){
    //     try{
    //         const airport = await Airport.findByPk(airportId);
    //         return airport;
    //     }
    //     catch(error){
    //         console.log("Something went wrong in airport repository layer");
    //         throw {error}
    //     }
    // }
}

module.exports=AirportRepository;