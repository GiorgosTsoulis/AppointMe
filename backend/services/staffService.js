class staffService {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }

    async getAllStaffs() {
        return this.staffRepository.getAllStaffs();
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