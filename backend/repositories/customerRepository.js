class customerRepository {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }

    async getAllCustomers() {
        return this.customerModel.findAll();
    }

    async getCustomerById(uuid) {
        return this.customerModel.findOne({ where: { uuid } });
    }

    async createCustomer(customer) {
        return this.customerModel.create(customer);
    }

    async updateCustomer(uuid, customer) {
        const customerToUpdate = await this.customerModel.findOne({ where: { uuid } });
        if (customer) {
            return customerToUpdate.update(customer);
        }
        return null;
    }

    async deleteCustomer(uuid) {
        const customer = await this.customerModel.findOne({ where: { uuid } });
        if (customer) {
            return customer.destroy();
        }
    }
}

module.exports = customerRepository;