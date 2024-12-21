const { User, Store, Appointment, Staff, Service } = require('./models');

const userRepository = require('./repositories/userRepository');
const storeRepository = require('./repositories/storeRepository');
const staffRepository = require('./repositories/staffRepository');
const appointmentRepository = require('./repositories/appointmentRepository');

const userService = require('./services/userService');
const storeService = require('./services/storeService');
const staffService = require('./services/staffService');
const appointmentService = require('./services/appointmentService');

const userController = require('./controllers/userController');
const storeController = require('./controllers/storeController');
const staffController = require('./controllers/staffController');
const appointmentController = require('./controllers/appointmentController');

const userRepo = new userRepository(User);
const storeRepo = new storeRepository(Store, Staff, User, Service);
const staffRepo = new staffRepository(Staff);
const appointmentRepo = new appointmentRepository(Appointment);

const userServ = new userService(userRepo);
const storeServ = new storeService(storeRepo);
const staffServ = new staffService(userRepo, storeRepo, staffRepo);
const appointmentServ = new appointmentService(appointmentRepo);

const userCtrl = new userController(userServ);
const storeCtrl = new storeController(storeServ);
const staffCtrl = new staffController(staffServ);
const appointmentCtrl = new appointmentController(appointmentServ);

module.exports = {
    userCtrl,
    storeCtrl,
    staffCtrl,
    appointmentCtrl
}