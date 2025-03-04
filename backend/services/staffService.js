class staffService {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }

    async getStaffById(staffId) {
        const staff = await this.staffRepository.getStaffById(staffId);
        if (!staff) {
            throw new Error('Staff not found');
        }
        return staff;
    }

    async getAllStaffByStoreId(storeId) {
        const staff = await this.staffRepository.getAllStaffByStoreId(storeId);
        if (!staff) {
            throw new Error('Staff not found');
        }
        return staff;
    }

    async updateStaff(staffId, userId, serviceId) {
        const staff = await this.staffRepository.updateStaff(staffId, userId, serviceId);
        if (!staff) {
            throw new Error('Error updating staff');
        }
        return staff;
    }

    async createStaff(storeId, userId, serviceId) {
        const staff = await this.staffRepository.createStaff(storeId, userId, serviceId);
        if (!staff) {
            throw new Error('Error creating staff');
        }
        return staff;
    }

    async deleteStaff(staffId) {
        const result = await this.staffRepository.deleteStaff(staffId);
        if (!result) {
            throw new Error('Error deleting staff');
        }
        return result;
    }
}

module.exports = staffService;