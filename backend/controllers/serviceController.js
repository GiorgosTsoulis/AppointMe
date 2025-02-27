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

    getAllServicesByStoreId = async (req, res) => {
        const storeId = req.params.uuid;

        try {
            const services = await this.serviceService.getAllServicesByStoreId(storeId);
            res.json(services);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = serviceController;