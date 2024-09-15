//  Folder Structure - 
/  
    - src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
            - config.json
            -db.js
        repository/
    - test/ [later]
    - static/


# Welcome to Flight Service

 ## Project Setup
 - Clone the project to your local 
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

    ```

        {
            "development": {
                "username": <YOUR_DB_LOGIN_NAME>,
                "password": <YOUR_DB_PASSWORD>,
                "database": "Flights_Search_DB_DEV",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }

    ```
    
- Once you've added your db config as listen above, go to the src folder from your terminal and execute `npx sequelize db:create` ans then execute

`npx sequelize db:migrate`


## DB Design
    - Airplane Table
    - Flight
    - Airport
    - City

    - A flight belongs to airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belogs to one airport

## Tables

### City -> id, name, cteated_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
       Relationship -> City has many airports and Airport belogs to a city (one to many) 

       ```
       npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

       ```

       