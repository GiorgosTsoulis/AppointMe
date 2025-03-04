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

    getStoreServiceByName = async (req, res) => {
        const storeId = req.params.storeId;
        const name = req.params.name;

        try {
            const service = await this.serviceService.getStoreServiceByName(storeId, name);
            res.json(service);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateService = async (req, res) => {
        const serviceId = req.params.uuid;
        const serviceData = req.body;

        try {
            const updatedService = await this.serviceService.updateService(serviceId, serviceData);
            res.json(updatedService);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteService = async (req, res) => {
        const serviceId = req.params.uuid;

        try {
            const success = await this.serviceService.deleteService(serviceId);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createService = async (req, res) => {
        const serviceData = req.body;

        try {
            const newService = await this.serviceService.createService(serviceData);
            res.json(newService);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

}

module.exports = serviceController;