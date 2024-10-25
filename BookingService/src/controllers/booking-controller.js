const {StatusCodes} = require('http-status-codes')
const {BookingService} = require('../services/index');

const {REMINDER_BINDING_KEY} = require('../config/serverConfig')
const {createChannel,publishMessage} = require('../utils/messageQueue');

const bookingService = new BookingService();

class BookingController{

    constructor(){
    }

    async sendMessageToQueue(req,res){
        const channel = await createChannel();
        const payload = {
            data:{
                subject:'This is a noti from queue',
                content:'Queue will subscribe this',
                recipientEmail:'adef20477@gmail.com',
                notificationTime:'2024-10-25T14:15:00'
            },
            service:'CREATE_TICKET'
        };
        publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(payload));
        return res.status(200).json({
            message:"Successfully publich message"
        })
    }

    async create (req,res){
        try{
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                message:'Successfully completed booking',
                success:true,
                err:{},
                data:response
            })
        }catch(error){
            return res.status(error.statusCode).json({
                message:error.message,
                success: false,
                err:error.explanation,
                data:{},
            })
        }
    }
}



module.exports= BookingController