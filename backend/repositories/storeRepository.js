class storeRepository {
    constructor(storeModel, userModel) {
        this.storeModel = storeModel;
        this.userModel = userModel;
    }

    async getAllStores() {
        return this.storeModel.findAll();
    }

    async getStoreById(storeId) {
        return this.storeModel.findOne({ where: { storeId } });
    }

    async getStoreByUserId(userId) {
        return this.storeModel.findOne({ where: { adminId: userId } });
    }

    async getStaffByStoreId(storeId) {
        return this.staffModel.findAll({
            where: { storeId },
            include: [{
                model: this.userModel,
                as: 'user',
                attributes: ['username']
            }]
        });
    }

    async getAllServices() {
        return this.storeModel.findAll({ attributes: ['service'], group: ['service'] });
    }

    async getServicesByStoreId(storeId) {
        return this.serviceModel.findAll({ where: { storeId } });
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