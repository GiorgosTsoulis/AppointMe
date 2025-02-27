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
}

module.exports = staffController;