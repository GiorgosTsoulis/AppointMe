const { User, Store, Appointment, Staff, Service } = require('./models');

const userRepository = require('./repositories/userRepository');
const storeRepository = require('./repositories/storeRepository');
const staffRepository = require('./repositories/staffRepository');
const appointmentRepository = require('./repositories/appointmentRepository');
const serviceRepository = require('./repositories/serviceRepository');

const userService = require('./services/userService');
const storeService = require('./services/storeService');
const staffService = require('./services/staffService');
const appointmentService = require('./services/appointmentService');
const serviceService = require('./services/serviceService');

const userController = require('./controllers/userController');
const storeController = require('./controllers/storeController');
const staffController = require('./controllers/staffController');
const appointmentController = require('./controllers/appointmentController');
const authController = require('./controllers/authController');
const serviceController = require('./controllers/serviceController');

const userRepo = new userRepository(User);
const storeRepo = new storeRepository(Store, User);
const appointmentRepo = new appointmentRepository(Appointment, User, Store, Service);
const serviceRepo = new serviceRepository(Service);
const staffRepo = new staffRepository(Staff, User, Service);

const userServ = new userService(userRepo);
const storeServ = new storeService(storeRepo);
const staffServ = new staffService(staffRepo);
const appointmentServ = new appointmentService(appointmentRepo);
const serviceServ = new serviceService(serviceRepo);

const userCtrl = new userController(userServ);
const storeCtrl = new storeController(storeServ);
const staffCtrl = new staffController(staffServ);
const appointmentCtrl = new appointmentController(appointmentServ);
const serviceCtrl = new serviceController(serviceServ);
const authCtrl = new authController(userServ);

module.exports = {
    userCtrl,
    storeCtrl,
    staffCtrl,
    appointmentCtrl,
    serviceCtrl,
    authCtrl
};