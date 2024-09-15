const { CityRepository } = require('../repository/index')


class CityService{
    constructor(){
        this.cityReository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityReository.createCity(data);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw new Error(error);
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityReository.deleteCity(cityId)
            return response;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw new Error(error);
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.cityReository.updateCity(cityId,data);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw new Error(error);
        }
    }

    async getCity(cityId){
        try{
            const city = this.cityReository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw new Error(error);
        }
    }
 
    async getAllCities (filter){
        try{
            const cities = await this.cityReository.getAllCities({name:filter.name});
            return cities;
        }catch(error){
            console.log('Somthing went wrong at service layer');
            throw {error};
        }
    }
}

module.exports = CityService;