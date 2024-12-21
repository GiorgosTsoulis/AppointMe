class staffController {
    constructor(staffService) {
        this.staffService = staffService;
    }

    getUserByStaffId = async (req, res) => {
        const storeId = req.params.uuid;

        try {
            const staff = await this.staffService.getStaffByStoreId(storeId);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = staffController;