## Installation

### Prerequisites

Ensure that you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/)

### Badges

![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue.svg)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-yellow.svg)

### Steps to Install

1. **Clone the repository:**

    ```bash
    git clone https://github.com/abhirajdighe/airline-microservices-backend.git
    ```

2. **Navigate to the root directory and install dependencies for each microservice:**

    For the **Booking Service**:
    ```bash
    cd booking-service
    npm install
    ```

    For the **Customer Service**:
    ```bash
    cd ../customer-service
    npm install
    ```

    For the **Flight Service**:
    ```bash
    cd ../flight-service
    npm install
    ```

3. **Set up the MySQL database:**
   - Ensure that MySQL is installed and running on your machine.
   - Create a database named `airline_db` (or any other name).
   - Update the `.env` file in each service with your MySQL database connection details.


4. **Test the APIs:**
   - Once all services are up and running, you can test the API endpoints using tools like Postman or Curl.
