class customerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async getAllCustomers() {
        return this.customerRepository.getAllCustomers();
    }

    async getCustomerById(uuid) {
        const customer = this.customerRepository.getCustomerById(uuid);
        if (!customer) {
            throw new Error('Customer not found');
        }
        return customer;
    }

    async createCustomer(customer) {
        if (!customer.username || !customer.email || !customer.password || !customer.role) {
            throw new Error('Invalid customer data');
        }
        return await this.customerRepository.createCustomer(customer);
    }

    async updateCustomer(uuid, customer) {
        const updateCustomer = await this.customerRepository.updateCustomer(uuid, customer);
        if (!updateCustomer) {
            throw new Error('Customer not found');
        }
        return updateCustomer;
    }

    async deleteCustomer(uuid) {
        const success = await this.customerRepository.deleteCustomer(uuid);
        if (!success) {
            throw new Error('Customer not found');
        }
        return success;
    }
}

module.exports = customerService;