class customerController {
    constructor(customerService) {
        this.customerService = customerService;
    }

    getAllCustomers = async (req, res) => {
        try {
            const customers = await this.customerService.getAllCustomers();
            res.json(customers);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getCustomerById = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const customer = await this.customerService.getCustomerById(uuid);
            res.json(customer);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createCustomer = async (req, res) => {
        const customer = req.body;

        try {
            const newCustomer = await this.customerService.createCustomer(customer);
            res.json(newCustomer);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateCustomer = async (req, res) => {
        const uuid = req.params.uuid;
        const customer = req.body;

        try {
            const updatedCustomer = await this.customerService.updateCustomer(uuid, customer);
            res.json(updatedCustomer);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteCustomer = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const success = await this.customerService.deleteCustomer(uuid);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = customerController;