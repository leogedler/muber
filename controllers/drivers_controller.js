const Driver = require('../models/driver');

module.exports = {
    // Greeting route
    greeting(req, res){
        res.send({ hi: 'there' });
    },
    // Create route
    create(req, res, next){
        const driverProps = req.body;
        Driver.create(driverProps)
            .then(driver => res.send(driver))
            // Call error handler middleware
            .catch(next);
    },
    // Edit route
    edit(req, res, next){
        const driverId = req.params.id;
        const driverProps = req.body;
        Driver.findByIdAndUpdate(driverId, driverProps)
            .then(()=> Driver.findById(driverId))
            .then((driver)=>res.send(driver))
            .catch(next);
    },
    // Delete route
    delete(req, res, next){
        const driverId = req.params.id;
        Driver.findByIdAndRemove(driverId)
            .then((driver)=>res.status(204).send(driver))
            .catch(next);

    }

}