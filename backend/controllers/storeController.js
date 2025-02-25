class storeController {
    constructor(storeService) {
        this.storeService = storeService;
    }

    getAllStores = async (req, res) => {
        try {
            const stores = await this.storeService.getAllStores();
            res.json(stores);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getStoreById = async (req, res) => {
        const storeId = req.params.uuid;

        try {
            const store = await this.storeService.getStoreById(storeId);
            res.json(store);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getStaffByStoreId = async (req, res) => {
        const storeId = req.params.uuid;

        try {
            const staff = await this.storeService.getStaffByStoreId(storeId);
            res.json(staff);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAllServices = async (req, res) => {
        try {
            const services = await this.storeService.getAllServices();
            res.json(services);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getServicesByStoreId = async (req, res) => {
        const storeId = req.params.uuid;

        try {
            const services = await this.storeService.getServicesByStoreId(storeId);
            res.json(services);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createStore = async (req, res) => {
        const store = req.body;

        try {
            const newStore = await this.storeService.createStore(store);
            res.json(newStore);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateStore = async (req, res) => {
        const uuid = req.params.uuid;
        const store = req.body;

        try {
            const updatedStore = await this.storeService.updateStore(uuid, store);
            res.json(updatedStore);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteStore = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const success = await this.storeService.deleteStore(uuid);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getAllLocations = async (req, res) => {
        try {
            const locations = await this.storeService.getAllLocations();
            res.json(locations);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = storeController;