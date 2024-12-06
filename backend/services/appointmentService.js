class appointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    async getAllAppointments() {
        return this.appointmentRepository.getAllAppointments();
    }

    async getAppointmentById(uuid) {
        const appointment = this.appointmentRepository.getAppointmentById(uuid);
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        return appointment;
    }

    async createAppointment(appointment) {
        if (!appointment.customerId || !appointment.staffId || !appointment.storeId || !appointment.appointmentDate || !appointment.appointmentTime || !appointment.serviceType) {
            throw new Error('Invalid appointment data');
        }
        return await this.appointmentRepository.createAppointment(appointment);
    }

    async updateAppointment(uuid, appointment) {
        const updateAppointment = await this.appointmentRepository.updateAppointment(uuid, appointment);
        if (!updateAppointment) {
            throw new Error('Appointment not found');
        }
        return updateAppointment;
    }

    async deleteAppointment(uuid) {
        const success = await this.appointmentRepository.deleteAppointment(uuid);
        if (!success) {
            throw new Error('Appointment not found');
        }
        return success;
    }
}

module.exports = appointmentService;