class staffService {
    constructor(userRepository, storeRepository, appointmentRepository) {
        this.userRepository = userRepository;
        this.storeRepository = storeRepository;
        this.appointmentRepository = appointmentRepository;
    }

    async getAppointmentsForStaff(uuid) {
        const user = this.userRepository.getUserById(uuid);
        if (!user || user.role !== 'staff') {
            throw new Error('Staff not found');
        }
        const appointments = await this.appointmentRepository.getAppointmentsByStaffId(uuid);
        return appointments;
    }

    async getStaffById(uuid) {
        const staff = this.staffRepository.getStaffById(uuid);
        if (!staff) {
            throw new Error('Staff not found');
        }
        return staff;
    }

    async createStaff(staff) {
        if (!staff.username || !staff.email || !staff.storeId || !staff.role || !staff.store || !staff.serviceType) {
            throw new Error('Invalid staff data');
        }
        return await this.staffRepository.createStaff(staff);
    }

    async updateStaff(uuid, staff) {
        const updateStaff = await this.staffRepository.updateStaff(uuid, staff);
        if (!updateStaff) {
            throw new Error('Staff not found');
        }
        return updateStaff;
    }

    async deleteStaff(uuid) {
        const success = await this.staffRepository.deleteStaff(uuid);
        if (!success) {
            throw new Error('Staff not found');
        }
        return success;
    }
}

module.exports = staffService;