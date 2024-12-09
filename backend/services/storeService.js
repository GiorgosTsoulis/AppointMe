class storeService {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }

    async getAllStores() {
        return this.storeRepository.getAllStores();
    }

    async getStoreById(uuid) {
        const store = this.storeRepository.getStoreById(uuid);
        if (!store) {
            throw new Error('Store not found');
        }
        return store;
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