const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://david:david555@cluster0.jrjym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database...');
    }
    catch(e) {
        console.log('There is some error occurred.');
    }
};

module.exports = connectDb;