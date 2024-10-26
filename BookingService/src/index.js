const bodyParser = require('body-parser');
const express = require('express');

const {PORT,FLIGHT_SERVICE_PATH} = require('./config/serverConfig');
const apiRoutes = require('./routes/index')

const db = require('./models/index')

const setupAndStartServer=()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // app.get('/api/v1/home',(req,res)=>{
    //     return res.json({'message':'hitting booking service'})
    // })

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`)
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    });
}

setupAndStartServer();