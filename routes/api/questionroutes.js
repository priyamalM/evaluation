express  = require('express');
router = express.Router();

const {McqQuestion, EssayQuestion, CodingQuestion} = require('../../model/questions');
const {MCQ,ESSAY,CODING} =  require('../../model/questionTypes');

//get all the qustions
router.get('/event/:eventId',async (req,res)=>{ 
   let mcqQuestionList;
   let essayQuestionList;
   let codingQuestionList;
    try {
    mcqQuestionList = await McqQuestion.find({ eventid : req.params.eventId }).exec();
    essayQuestionList = await EssayQuestion.find({ eventid : req.params.eventId }).exec();
    codingQuestionList = await CodingQuestion.find({ eventid : req.params.eventId }).exec();
    res.json({mcqQuestionList,essayQuestionList,codingQuestionList});
    } catch (error) {
    res.status(400);  
    res.send(`something went wrong trying to retrieve questions from ${req.params.eventId}`); 
    }
});


//save an item
router.post('/:type',async (req,res)=>{
   type =  req.params.type;
   if(type===MCQ){
        mcqQuestion = new McqQuestion(req.body);
        try {
            mcqQuestion = await mcqQuestion.save();
            res.send(mcqQuestion);
        } catch (error) {
            res.status(400);
            res.send(`error saving the question ${error} `);
        }
   }else if(type===ESSAY){
       essayQuestion = new EssayQuestion(req.body);
       try {     
            essayQuestion = await essayQuestion.save();
            res.send(essayQuestion);
       } catch (error) {
        res.status(400);
        res.send(`error saving the question ${error} `); 
       }
   }else if(type===CODING){
       codingQuestion = new CodingQuestion(req.body);
       try {
            codingQuestion = await codingQuestion.save();
            res.send(codingQuestion);
       } catch (error) {
           res.status(400);
           res.send(`error saving the question ${error} `); 
       }
   }
});


//delete an item
router.delete('/:id',(req,res)=>{

});

module.exports = router;