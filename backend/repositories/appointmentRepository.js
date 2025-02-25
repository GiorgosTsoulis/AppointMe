class appointmentRepository {
    constructor(appointmentModel, userModel, storeModel, serviceModel) {
        this.appointmentModel = appointmentModel;
        this.userModel = userModel;
        this.storeModel = storeModel;
        this.serviceModel = serviceModel;
    }

    async getAllAppointments() {
        return this.appointmentModel.findAll();
    }

    async getAppointmentById(uuid) {
        return this.appointmentModel.findOne({ where: { uuid } });
    }

    async getAppointmentByStaffId(uuid) {
        return this.appointmentModel.findAll({ where: { staffId: uuid } });
    }

    async getAppointmentByStoreId(uuid) {
        return this.appointmentModel.findAll({ where: { storeId: uuid } });
    }

    async getAppointmentByUserId(uuid) {
        return this.appointmentModel.findAll({ where: { customerId: uuid } });
    }

    async getAppointmentByDate(date) {
        return this.appointmentModel.findAll({ where: { appointmentDate: date } });
    }

    async createAppointment(appointment) {
        return this.appointmentModel.create(appointment);
    }

    async updateAppointment(uuid, appointment) {
        const appointmentToUpdate = await this.appointmentModel.findOne({ where: { uuid } });
        if (appointment) {
            return appointmentToUpdate.update(appointment);
        }
        return null;
    }

    async deleteAppointment(uuid) {
        const appointment = await this.appointmentModel.findOne({ where: { uuid } });
        if (appointment) {
            return appointment.destroy();
        }
    }
}

module.exports = appointmentRepository;