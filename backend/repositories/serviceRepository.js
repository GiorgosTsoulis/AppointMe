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
}

module.exports = serviceRepository;