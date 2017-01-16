const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    }
    // location: DoubleRange
});

Driver = mongoose.model('drivers', DriverSchema);

module.exports = Driver;