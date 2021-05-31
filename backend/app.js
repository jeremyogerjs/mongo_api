const express = require('express');
const app = express();
const Articles = require('./model');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://JeremAdmin:Jeremync.2016@clustertuto.9kedr.mongodb.net/articles_trainning?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology: true 
})
.then(() => console.log('Connexion a MongoDB réussie !'))
.catch(() => console.log('Connexion a MongoDB échouée !'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());

app.get('/api/articles',(req,res,next) => {

    Articles.find()
    .then(Articles => res.status(200).json({articles: Articles}))
    .catch(error =>  res.status(400).json({ error }));
});

app.get('/api/articles/:id',(req,res,next)=> {
    Articles.findOne({_id:req.params.id})
    .then((article)=> res.status(200).json({ article }))
    .catch(error => res.status(400).json({ error }));
})
app.post('/api/articles',(req,res,next) => {
    delete req.body._id;
    const article = new Articles({
        ...req.body
    });
    article.save()
    .then(()=> res.status(201).json({ article }))
    .catch(error => res.status(400).json({ error }));
})
app.put('/api/articles/:id',(req,res,next) => {
    Articles.updateOne({_id:req.params.id},{...req.body,_id:req.params.id})
    .then(()=> res.status(200).json({message:"Objet modifié !"}))
    .catch(error => res.status(400).json({ error }));
})
app.delete('/api/articles/:id',(req,res,next)=> {
    Articles.deleteOne({_id:req.params.id})
    .then(()=> res.status(200).json({message:"article supprimé !"}))
    .catch(error => res.status(400).json({ error }));
})
module.exports = app;