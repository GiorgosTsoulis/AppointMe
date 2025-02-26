class serviceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
    }

    getServiceById = async (req, res) => {
        const serviceId = req.params.uuid;

        try {
            const service = await this.serviceService.getServiceById(serviceId);
            res.json(service);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = serviceController;