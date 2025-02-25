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

    getAppointmentByStaffId = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const appointments = await this.appointmentService.getAppointmentByStaffId(uuid);
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAppointmentByStoreId = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const appointments = await this.appointmentService.getAppointmentByStoreId(uuid);
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAppointmentByUserId = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const appointments = await this.appointmentService.getAppointmentByUserId(uuid);
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAppointmentByDate = async (req, res) => {
        const date = req.params.date;

        try {
            const appointments = await this.appointmentService.getAppointmentByDate(date);
            res.json(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createAppointment = async (req, res) => {
        const { customerId, storeId, staffId, serviceId, appointmentDate, appointmentTime, phoneNumber } = req.body;

        const appointment = {
            customerId,
            storeId,
            staffId,
            serviceId,
            appointmentDate,
            appointmentTime,
            phoneNumber
        };

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