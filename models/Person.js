const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const url = process.env.MONGODB_URI;
mongoose.connect(url)
.then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
})
const personSchema = new mongoose.Schema({
  id: String,
  name: {
     type: String,
     minLength:1,
     require:true
  },
  number: {
     type: String,
     minLength:5,
     required :true
  }
});
personSchema.set('toJSON',{
    transform:(document,returnObject)=>{
        returnObject.id=returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    }
})
module.exports = mongoose.model('Person', personSchema);