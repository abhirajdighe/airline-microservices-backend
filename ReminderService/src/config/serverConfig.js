const dotenv = require('dotenv')
// const bcrypt = require('bcrypt')
dotenv.config();
module.exports={
    PORT:process.env.PORT,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS:process.env.EMAIL_PASS,
}