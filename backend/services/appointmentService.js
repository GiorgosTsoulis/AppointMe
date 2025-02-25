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

    async getAppointmentByStaffId(uuid) {
        const appointments = this.appointmentRepository.getAppointmentByStaffId(uuid);
        if (!appointments) {
            throw new Error('Appointments not found');
        }
        return appointments;
    }

    async getAppointmentByStoreId(uuid) {
        const appointments = this.appointmentRepository.getAppointmentByStoreId(uuid);
        if (!appointments) {
            throw new Error('Appointments not found');
        }
        return appointments;
    }

    async getAppointmentByUserId(uuid) {
        const appointments = this.appointmentRepository.getAppointmentByUserId(uuid);
        if (!appointments) {
            throw new Error('Appointments not found');
        }
        return appointments;
    }

    async getAppointmentByDate(date) {
        const appointments = this.appointmentRepository.getAppointmentByDate(date);
        if (!appointments) {
            throw new Error('Appointments not found');
        }
        return appointments;
    }


    async createAppointment(appointment) {
        const { customerId, storeId, staffId, serviceId, appointmentDate, appointmentTime, phoneNumber } = appointment;

        if (!customerId || !storeId || !staffId || !serviceId || !appointmentDate || !appointmentTime || !phoneNumber) {
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