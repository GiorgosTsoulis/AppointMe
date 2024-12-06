class adminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }

    async getAllAdmins() {
        return this.adminRepository.getAllAdmins();
    }

    async getAdminById(uuid) {
        const admin = this.adminRepository.getAdminById(uuid);
        if (!admin) {
            throw new Error('Admin not found');
        }
        return admin;
    }

    async createAdmin(admin) {
        if (!admin.storeId || !admin.userId) {
            throw new Error('Invalid admin data');
        }
        return await this.adminRepository.createAdmin(admin);
    }

    async updateAdmin(uuid, admin) {
        const updateAdmin = await this.adminRepository.updateAdmin(uuid, admin);
        if (!updateAdmin) {
            throw new Error('Admin not found');
        }
        return updateAdmin;
    }

    async deleteAdmin(uuid) {
        const success = await this.adminRepository.deleteAdmin(uuid);
        if (!success) {
            throw new Error('Admin not found');
        }
        return success;
    }
}

module.exports = adminService;