const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const McqSchema = new Schema({
    question : {
        type : String,
        required : true
    },
    answer : {
        type : Number,
        required : true
    },
    answers : {
        type : Map,
        required : true
    },
    marks : {
        type : Number,
        default : 0
    },
    eventid : {
        type : String,
        required : true
    }
});

McqQuestion = mongoose.model('McqQuestion',McqSchema);

const EssaySchema = new Schema({
    question : {
        type : String,
        required : true
    },
    answerPointers : {
        type : String,
        required : false
    },
    marks : {
        type : Number,
        default : 0
    },
    eventid : {
        type : String,
        required : true
    }
});

EssayQuestion = mongoose.model('EssayQuestion',EssaySchema);

const CodingQuestionSchema = new Schema({
    question : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    },
    marks : {
        type : Number,
        default : 0
    },
    eventid : {
        type : String,
        required : true
    }
});

CodingQuestion = mongoose.model('CodingQuestion',CodingQuestionSchema);

module.exports = {
    McqQuestion,
    EssayQuestion,
    CodingQuestion
}
