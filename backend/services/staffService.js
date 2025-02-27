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
}

module.exports = staffService;