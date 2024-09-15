const { Op } = require('sequelize');
const {City} = require('../models/index');


class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
            // console.log({name});
        } catch (error) {
            console.log("Error occure while creating City.");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
             await City.destroy({
                where:{
                    id:cityId
                }
            }) 
            return true;
        }
        catch(error){
            console.log("Error occure while deleting City")
            throw{error}
        }
    }

    async updateCity(cityId,data){
        try{
            // The below approach also works but will not return  updated Object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     },
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Error occure while updating City")
            throw {error}
        }

        
    }


    async getCity(cityId){
        try{
            // const city = await City.findOne(cityId);
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Error occure while getting City")
            throw{error}
        }
    }

    async getAllCities(filter){ // filter can be empty also
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }catch(error){
            console.log("Error occure while repository layer")
            throw{error}
        }
    }
}

module.exports = CityRepository;