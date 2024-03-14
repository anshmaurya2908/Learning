require('dotenv').config()
const express=require('express');
const morgan = require('morgan');
const Person=require('./models/Person');
const cors=require("cors");
const app = express(); 
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('build'));
app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.get('/info', (req, res) =>{
  Person.countDocuments({})
  .then(count=>{
  res.send(`PhoneBook has ${count}  contacts </br> ${Date()}`);
  })
})
app.get('/api/persons',(req,res)=>{
  Person.find({}).then(persons=>{
    res.json(persons);
})
})
app.get('/api/persons/:id',(req,res,next)=>{
      Person.findById(req.params.id)
      .then(person=>{
           res.json(person);
      })
      .catch(error=>next(error));
})
app.post('/api/persons',(req,res,next)=>{
    const body=req.body;
    const person = new Person({
    name: body.name,
    number: body.number
    })
    person.save().then(savedPerson => {
      res.json(savedPerson)
    })
    .catch(err => next(err))
})
app.put('/api/persons/:id',(req,res,next)=>{
  const body=req.body;
  const person={
    name:body.name,
    number:body.number
  }
  console.log('updating')
  Person.findByIdAndUpdate(req.params.id,person,{new:true})
  .then(updatedPerson=>{
    res.json(updatedPerson);
  })
  .catch(error=>next(error));
})
app.delete('/api/persons/:id',(req,res,next)=>{
  Person.findByIdAndDelete(req.params.id)
      .then(person=>{
          res.status(200).end('deleted');
      })
    .catch(error=>next(error))
})
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)
const errorHandler=(error,req,res,next)=> {
  if(error.name==='CastError'){
    return res.status(400).send('castError');
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }
  next(error);
}
app.use(errorHandler);
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})