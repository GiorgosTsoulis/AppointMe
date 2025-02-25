class staffService {
    constructor(userRepository, storeRepository, appointmentRepository, staffRepository) {
        this.userRepository = userRepository;
        this.storeRepository = storeRepository;
        this.appointmentRepository = appointmentRepository;
        this.staffRepository = staffRepository;
    }

    async getStaffByStoreId(uuid) {
        const store = await this.storeRepository.getStoreById(uuid);
        if (store) {
            return store.getStaff();
        }
        return null;
    }
}

module.exports = staffService;