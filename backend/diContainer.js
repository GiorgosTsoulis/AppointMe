const { User, Admin, Staff, Customer, Store, Appointment } = require('./models');

const userRepository = require('./repositories/userRepository');
const staffRepository = require('./repositories/staffRepository');
const customerRepository = require('./repositories/customerRepository');
const adminRepository = require('./repositories/adminRepository');
const storeRepository = require('./repositories/storeRepository');
const appointmentRepository = require('./repositories/appointmentRepository');

const userService = require('./services/userService');
const staffService = require('./services/staffService');
const customerService = require('./services/customerService');
const adminService = require('./services/adminService');
const storeService = require('./services/storeService');
const appointmentService = require('./services/appointmentService');

const userController = require('./controllers/userController');


const userRepo = new userRepository(User);


const userServ = new userService(userRepo);


const userCtrl = new userController(userServ);


module.exports = {
    userCtrl
}