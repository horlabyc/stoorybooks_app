const mongoose = require('mongoose');

const dbConnecttion = async() => {
  try {
    console.log(process.env.MONGO_URI)
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`DB connected on ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = dbConnecttion;