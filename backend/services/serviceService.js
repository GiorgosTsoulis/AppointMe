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
}

module.exports = serviceService;