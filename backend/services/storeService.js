class storeService {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }

    async getAllStores() {
        return this.storeRepository.getAllStores();
    }

    async getStoreById(storeId) {
        const store = await this.storeRepository.getStoreById(storeId);
        if (!store) {
            throw new Error('Store not found');
        }
        return store;
    }

    async getStoreByUserId(userId) {
        const store = await this.storeRepository.getStoreByUserId(userId);
        if (!store) {
            throw new Error('Store not found');
        }
        return store;
    }

    async getStaffByStoreId(storeId) {
        const staff = await this.storeRepository.getStaffByStoreId(storeId);
        if (!staff) {
            throw new Error('Staff not found');
        }
        return staff
    }

    async getAllServices() {
        const services = await this.storeRepository.getAllServices();
        if (!services) {
            throw new Error('No services found');
        }
        return services;
    }

    async getServicesByStoreId(storeId) {
        const services = await this.storeRepository.getServicesByStoreId(storeId);
        if (!services) {
            throw new Error('No services found');
        }
        return services;
    }

    async createStore(store) {
        if (!store.name || !store.location || !store.service) {
            throw new Error('Invalid store data');
        }
        return await this.storeRepository.createStore(store);
    }

    async updateStore(uuid, store) {
        const updateStore = await this.storeRepository.updateStore(uuid, store);
        if (!updateStore) {
            throw new Error('Store not found');
        }
        return updateStore;
    }

    async deleteStore(uuid) {
        const success = await this.storeRepository.deleteStore(uuid);
        if (!success) {
            throw new Error('Store not found');
        }
        return success;
    }

    async getAllLocations() {
        return this.storeRepository.getAllLocations();
    }
}

module.exports = storeService;