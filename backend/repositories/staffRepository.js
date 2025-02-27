class staffRepository {
    constructor(staffModel, userModel, serviceModel) {
        this.staffModel = staffModel;
        this.userModel = userModel;
        this.serviceModel = serviceModel;
    }

    async getStaffById(staffId) {
        return this.staffModel.findOne({
            where: { staffId },
            include: [
                {
                    model: this.userModel,
                    as: 'user',
                    attributes: ['username']
                },
                {
                    model: this.serviceModel,
                    as: 'service',
                    attributes: ['name']
                }
            ]
        });
    }

    async getAllStaffByStoreId(storeId) {
        return this.staffModel.findAll({
            where: { storeId },
            include: [
                {
                    model: this.userModel,
                    as: 'user',
                    attributes: ['username']
                },
                {
                    model: this.serviceModel,
                    as: 'service',
                    attributes: ['name']
                }
            ]
        });
    }
}

module.exports = staffRepository;