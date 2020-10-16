const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db)=> {
    console.log('Connected correctly to the server');

    var newDish = Dishes({
        name: 'Uthappiza',
        description : 'test'
    });

    newDish.save()
    .then((dish) => {
        console.log("added successfully \n", dish);
        return Dishes.find({});
    })
    .then( (dishes) => {
        console.log("Found \n" , dishes);
        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});