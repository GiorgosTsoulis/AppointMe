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

    async getStoreServiceByName(storeId, name) {
        const service = this.serviceRepository.getStoreServiceByName(storeId, name);
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    }

    async updateService(serviceId, serviceData) {
        const updatedService = this.serviceRepository.updateService(serviceId, serviceData);
        if (!updatedService) {
            throw new Error('Failed to update service');
        }
        return updatedService;
    }

    async deleteService(serviceId) {
        const deletedService = this.serviceRepository.deleteService(serviceId);
        if (!deletedService) {
            throw new Error('Failed to delete service');
        }
        return deletedService;
    }

    async createService(serviceData) {
        const newService = this.serviceRepository.createService(serviceData);
        if (!newService) {
            throw new Error('Failed to create service');
        }
        return newService;
    }
}

module.exports = serviceService;