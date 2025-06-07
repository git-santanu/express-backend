const sequelize = require("./config/database")

const TestConnection = async() => {
    try {
        await sequelize.authenticate()
        console.log('connection succesfull')
    } catch (error) {
        console.log('unable to connect', error)
    }
}
TestConnection()