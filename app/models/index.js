const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URL;

db.createEmailService = require('./mailServiceModel.js')(mongoose);

module.exports = db
