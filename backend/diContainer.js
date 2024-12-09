const { User, Store, Appointment } = require('./models');

const userRepository = require('./repositories/userRepository');
const storeRepository = require('./repositories/storeRepository');
const appointmentRepository = require('./repositories/appointmentRepository');

const userService = require('./services/userService');
const storeService = require('./services/storeService');
const appointmentService = require('./services/appointmentService');

const userController = require('./controllers/userController');
const storeController = require('./controllers/storeController');
const appointmentController = require('./controllers/appointmentController');

const userRepo = new userRepository(User);
const storeRepo = new storeRepository(Store);
const appointmentRepo = new appointmentRepository(Appointment);

const userServ = new userService(userRepo);
const storeServ = new storeService(storeRepo);
const appointmentServ = new appointmentService(appointmentRepo);

const userCtrl = new userController(userServ);
const storeCtrl = new storeController(storeServ);
const appointmentCtrl = new appointmentController(appointmentServ);

module.exports = {
    userCtrl,
    storeCtrl,
    appointmentCtrl
}