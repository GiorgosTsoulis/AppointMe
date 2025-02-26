class serviceRepository {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }

    async getServiceById(serviceId) {
        return this.serviceModel.findOne({ where: { serviceId } });
    }
}

module.exports = serviceRepository;