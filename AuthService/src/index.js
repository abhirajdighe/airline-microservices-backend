const express = require("express")
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
const apiRoutes = require('./routes/index')

const db = require('./models/index')

const app = express()

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes);  
    app.listen(3001, async()=>{
        console.log(`Server started on Port: ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alert:true});
        }

        // const service = new UserService();
        // const newToken = service.createToken({email:'abhiraj@gmail.com',id:1});
        // const token = newToken;
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();