const {StatusCodes} = require('http-status-codes');
const { ValidationError,AppError } = require('../utils/errors/index');
const {Booking} = require('../models/index');

class BookingRepository{
    async create(data){
        try{
            const booking = await Booking.create(data);
            return booking;
        }catch(error){
            if(error.name='SequelizeValidationError'){
                throw new ValidationError(error)
            }
            throw AppError(
                'RepositoryError',
                'Cannot create Booking',
                'There was some issue creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    
}

module.exports= BookingRepository;