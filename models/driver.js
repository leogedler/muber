const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Point coordinate schema
const PointSchema = new Schema({
    type: String,
    coordinates: { type: [Number], index: '2dsphere' }
});

// Driver schema
const DriverSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    },
    geometry: PointSchema
});

Driver = mongoose.model('drivers', DriverSchema);

module.exports = Driver;