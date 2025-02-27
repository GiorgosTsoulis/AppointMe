class serviceService {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    async getServiceById(serviceId) {
        const service = this.serviceRepository.getServiceById(serviceId);
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    }

    async getAllServicesByStoreId(storeId) {
        const services = this.serviceRepository.getAllServicesByStoreId(storeId);
        if (!services) {
            throw new Error('No services found for this store');
        }
        return services;
    }
}

module.exports = serviceService;