const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happy-paws',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
)
.then(console.log("Database Connection Successful!"))
.catch(err => {
  console.log(err)
})

module.exports = mongoose.connection;