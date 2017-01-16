const DriversController = require('../controllers/drivers_controller')

module.exports = (app) => {
    // Watch for incoming request of method GET
    // to the route http://localhost:3050/api
    app.get('/api', DriversController.greeting)

    // Create a new driver
    app.post('/api/drivers', DriversController.create);

    // Edit driver
    app.put('/api/drivers/:id', DriversController.edit);

    // Delete a driver
    app.delete('/api/drivers/:id', DriversController.delete);
}