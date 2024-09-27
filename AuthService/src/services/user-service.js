const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const UserRepository = require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverConfig');
const AppErrors = require('../utils/error-handlers');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try{
            const user = await this.userRepository.create(data)
            return user;
        }catch(error){
            if(error.name == 'SequelizeValidationError'){
                throw error;
            }
            console.log("Somthing went wrong in service layer");
            throw error;
        }
    }

    async signIn(email,plainPassword){
        try{
            const user = await this.userRepository.getByEmail(email);
            const passwordsMatch = this.checkPassword(plainPassword,user.password);
            console.log(passwordsMatch);
            if(!passwordsMatch){
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            }
            else{
                const newJWT = this.createToken({email:user.email, id:user.id});
                return newJWT;
            }

            
        }catch(error){
            if(error.name == 'AttributeNotFound'){
                throw error;
            }
            console.log("Somthing went wrong in signIn process");
            throw error;
        }
    }

    async isAuthenticated(token){
        try{
            const response = this.verifyToken(token);
            if(!response){
                throw {error: 'Invalid token'};
            }
            const user = await this.userRepository.getById(response.id);
            if(!user){
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id;
        }catch(error){
            console.log("Somthing went wrong in auth process");
            throw error;
        }
    }

    createToken(user){
        try{
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1hr'});
            return result;
        }catch(error){
            console.log("Somthing went wrong in Token Creation");
            throw error
        }
    }

    verifyToken(token){
        try{
            const response = jwt.verify(token,JWT_KEY);
            return response;
        }catch(error){
            console.log("Somthing went wrong in Token validation",error);
            throw error
        }
    }

    checkPassword(userInputPlainPassword,encrypedPassword){
        try{
            // console.log(bcrypt.compare(userInputPlainPassword,encrypedPassword));
            return bcrypt.compareSync(userInputPlainPassword,encrypedPassword)
        }catch(error){
            console.log("Somthing went wrong in Password comparison");
            throw error
        }
    }

    async isAdmin(userId){
        try{
            return this.userRepository.isAdmin(userId);
        }catch(error){
            console.log("Somthing went wrong in Service Layer");
            throw error
        }
    }
}


module.exports = UserService;