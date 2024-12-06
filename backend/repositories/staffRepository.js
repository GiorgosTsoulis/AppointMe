class staffRepository {
    constructor(staffModel) {
        this.staffModel = staffModel;
    }

    async getAllStaffs() {
        return this.staffModel.findAll();
    }

    async getStaffById(uuid) {
        return this.staffModel.findOne({ where: { uuid } });
    }

    async createStaff(staff) {
        return this.staffModel.create(staff);
    }

    async updateStaff(uuid, staff) {
        const staffToUpdate = await this.staffModel.findOne({ where: { uuid } });
        if (staff) {
            return staffToUpdate.update(staff);
        }
        return null;
    }

    async deleteStaff(uuid) {
        const staff = await this.staffModel.findOne({ where: { uuid } });
        if (staff) {
            return staff.destroy();
        }
    }
}

module.exports = staffRepository;