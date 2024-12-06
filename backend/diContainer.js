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
const staffController = require('./controllers/staffController');
const customerController = require('./controllers/customerController');
const adminController = require('./controllers/adminController');
const storeController = require('./controllers/storeController');
const appointmentController = require('./controllers/appointmentController');

const userRepo = new userRepository(User);
const staffRepo = new staffRepository(Staff);
const customerRepo = new customerRepository(Customer);
const adminRepo = new adminRepository(Admin);
const storeRepo = new storeRepository(Store);
const appointmentRepo = new appointmentRepository(Appointment);

const userServ = new userService(userRepo);
const staffServ = new staffService(staffRepo);
const customerServ = new customerService(customerRepo);
const adminServ = new adminService(adminRepo);
const storeServ = new storeService(storeRepo);
const appointmentServ = new appointmentService(appointmentRepo);

const userCtrl = new userController(userServ);
const staffCtrl = new staffController(staffServ);
const customerCtrl = new customerController(customerServ);
const adminCtrl = new adminController(adminServ);
const storeCtrl = new storeController(storeServ);
const appointmentCtrl = new appointmentController(appointmentServ);

module.exports = {
    userCtrl,
    staffCtrl,
    customerCtrl,
    adminCtrl,
    storeCtrl,
    appointmentCtrl
}