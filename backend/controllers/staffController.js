class staffController {
    constructor(staffService) {
        this.staffService = staffService;
    }

    getAllStaff = async (req, res) => {
        try {
            const staff = await this.staffService.getAllStaff();
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getStaffById = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const staff = await this.staffService.getStaffById(uuid);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createStaff = async (req, res) => {
        const staff = req.body;

        try {
            const newStaff = await this.staffService.createStaff(staff);
            res.json(newStaff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateStaff = async (req, res) => {
        const uuid = req.params.uuid;
        const staff = req.body;

        try {
            const updatedStaff = await this.staffService.updateStaff(uuid, staff);
            res.json(updatedStaff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteStaff = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const success = await this.staffService.deleteStaff(uuid);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAppointments = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const appointments = await this.staffService.getAppointmentsForStaff(uuid);
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = staffController;