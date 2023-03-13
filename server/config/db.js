const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/testInv';

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB:ERROR');
                }else{
                    console.log('DB:CONNECT');
                }
            }
        )
    }

    connect();
}
    