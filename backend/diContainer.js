const { User, Admin, Staff, Customer, Store, Appointment } = require('./models');

const userRepository = require('./repositories/userRepository');

const userService = require('./services/userService');


const userController = require('./controllers/userController');


const userRepo = new userRepository(User);


const userServ = new userService(userRepo);


const userCtrl = new userController(userServ);


module.exports = {
    userCtrl
}