class adminController {
    constructor(adminService) {
        this.adminService = adminService;
    }

    getAllAdmins = async (req, res) => {
        try {
            const admins = await this.adminService.getAllAdmins();
            res.json(admins);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAdminById = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const admin = await this.adminService.getAdminById(uuid);
            res.json(admin);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createAdmin = async (req, res) => {
        const admin = req.body;

        try {
            const newAdmin = await this.adminService.createAdmin(admin);
            res.json(newAdmin);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateAdmin = async (req, res) => {
        const uuid = req.params.uuid;
        const admin = req.body;

        try {
            const updatedAdmin = await this.adminService.updateAdmin(uuid, admin);
            res.json(updatedAdmin);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteAdmin = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const success = await this.adminService.deleteAdmin(uuid);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = adminController;