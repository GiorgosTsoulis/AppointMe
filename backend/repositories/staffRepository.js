class staffRepository {
    constructor(staffModel) {
        this.staffModel = staffModel;
    }

    async getStaffById(staffId) {
        return this.staffModel.findOne({ where: { staffId } });
    }
}

module.exports = staffRepository;