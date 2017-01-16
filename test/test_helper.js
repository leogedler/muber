const mongoose = require('mongoose');


before(done => {
    //Connect to mongo muber_test
    mongoose.connect('mongodb://localhost:27017/muber_test');
    mongoose.connection
    .once('open', () => {
        done();
    })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
})

beforeEach((done) => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
    // Important gotcha!! ensure that the index exists
    .then(()=> drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
    .then(()=> done())
    .catch(()=> done())
})