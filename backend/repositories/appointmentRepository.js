class appointmentRepository {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }

    async getAllAppointments() {
        return this.appointmentModel.findAll();
    }

    async getAppointmentById(uuid) {
        return this.appointmentModel.findOne({ where: { uuid } });
    }

    async getAppointmentsByStaffId(uuid) {
        return this.appointmentModel.findAll({ where: { staffId: uuid } });
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