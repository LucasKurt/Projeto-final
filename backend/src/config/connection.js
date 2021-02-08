const mongoose = require('mongoose');


const connection = () => {
    mongoose.connect("mongodb://localhost:27017/comercio_amigavel",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB conectou com sucesso!")
    })
    .catch((error) => {
        console.error(error);
    });
}

module.exports = connection()