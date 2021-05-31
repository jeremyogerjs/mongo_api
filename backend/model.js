const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({

    title:{type:String,required:true},
    author:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:false},
    date:{type:Date,required:false},
})

module.exports = mongoose.model('Article',ArticleSchema)