const { app } = require('./app');

const PORT = process.env.PORT || 5000;

/*
app.listen(PORT, async () => {
 console.log('Server started listening on port: 3000');
 console.log(process.env.MONGO_URI);
 try {
  await mongoose.connect(process.env.MONGO_URI, {});
  console.log('Connected to Mongo DB.');
 } catch (error) {
  console.log(error);
 }
});
*/

const start = async () => {
  try {
  } catch (err) {
    // throw DB Conneciton Error
  }
};
