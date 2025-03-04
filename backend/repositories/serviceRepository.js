class serviceRepository {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }

    async getServiceById(serviceId) {
        return this.serviceModel.findOne({ where: { serviceId } });
    }

    async getAllServicesByStoreId(storeId) {
        return this.serviceModel.findAll({ where: { storeId } });
    }

    async getStoreServiceByName(storeId, name) {
        return this.serviceModel.findOne({ where: { storeId, name } });
    }

    async updateService(serviceId, serviceData) {
        const service = await this.serviceModel.findOne({ where: { serviceId } });
        if (service) {
            await service.update(serviceData);
            return service;
        }
        return null;
    }

    async deleteService(serviceId) {
        const service = await this.serviceModel.findOne({ where: { serviceId } });
        if (service) {
            return service.destroy();
        }
    }

    async createService(serviceData) {
        return this.serviceModel.create(serviceData);
    }
}

module.exports = serviceRepository;