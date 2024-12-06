class appointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }

    getAllAppointments = async (req, res) => {
        try {
            const appointments = await this.appointmentService.getAllAppointments();
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAppointmentById = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const appointment = await this.appointmentService.getAppointmentById(uuid);
            res.json(appointment);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createAppointment = async (req, res) => {
        const appointment = req.body;

        try {
            const newAppointment = await this.appointmentService.createAppointment(appointment);
            res.json(newAppointment);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateAppointment = async (req, res) => {
        const uuid = req.params.uuid;
        const appointment = req.body;

        try {
            const updatedAppointment = await this.appointmentService.updateAppointment(uuid, appointment);
            res.json(updatedAppointment);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteAppointment = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const success = await this.appointmentService.deleteAppointment(uuid);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = appointmentController;