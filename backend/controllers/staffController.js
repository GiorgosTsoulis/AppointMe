class staffController {
    constructor(staffService) {
        this.staffService = staffService;
    }

    getStaffById = async (req, res) => {
        const staffId = req.params.uuid;

        try {
            const staff = await this.staffService.getStaffById(staffId);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAllStaffByStoreId = async (req, res) => {
        const storeId = req.params.uuid;

        try {
            const staff = await this.staffService.getAllStaffByStoreId(storeId);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateStaff = async (req, res) => {
        const staffId = req.params.uuid;
        const { userId, serviceId } = req.body;

        try {
            const staff = await this.staffService.updateStaff(staffId, userId, serviceId);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createStaff = async (req, res) => {
        const storeId = req.params.uuid;
        const { userId, serviceId } = req.body;

        try {
            const staff = await this.staffService.createStaff(storeId, userId, serviceId);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteStaff = async (req, res) => {
        const staffId = req.params.uuid;

        try {
            await this.staffService.deleteStaff(staffId);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = staffController;