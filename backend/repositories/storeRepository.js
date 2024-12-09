class storeRepository {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }

    async getAllStores() {
        return this.storeModel.findAll();
    }

    async getStoreById(uuid) {
        return this.storeModel.findOne({ where: { uuid } });
    }

    async createStore(store) {
        return this.storeModel.create(store);
    }

    async updateStore(uuid, store) {
        const storeToUpdate = await this.storeModel.findOne({ where: { uuid } });
        if (store) {
            return storeToUpdate.update(store);
        }
        return null;
    }

    async deleteStore(uuid) {
        const store = await this.storeModel.findOne({ where: { uuid } });
        if (store) {
            return store.destroy();
        }
    }

    async getAllLocations() {
        return this.storeModel.findAll({ attributes: ['location'], group: ['location'] });
    }
}

module.exports = storeRepository;