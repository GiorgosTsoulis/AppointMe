class adminRepository {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }

    async getAllAdmins() {
        return this.adminModel.findAll();
    }

    async getAdminById(uuid) {
        return this.adminModel.findOne({ where: { uuid } });
    }

    async createAdmin(admin) {
        return this.adminModel.create(admin);
    }

    async updateAdmin(uuid, admin) {
        const adminToUpdate = await this.adminModel.findOne({ where: { uuid } });
        if (admin) {
            return adminToUpdate.update(admin);
        }
        return null;
    }

    async deleteAdmin(uuid) {
        const admin = await this.adminModel.findOne({ where: { uuid } });
        if (admin) {
            return admin.destroy();
        }
    }
}

module.exports = adminRepository;