express = require('express');
router = express.Router();
Evaluation = require('../../model/evaluation');


router.post('/',async (req,res)=>{
    try {
        evaluation = new Evaluation(req.body);
        evaluation = await evaluation.save();
        res.status(200);
        res.json(evaluation);
    } catch (error) {
        res.status(400);
        res.send(`couldn't save the event ${req.body} , ${error}`);
    }
});

router.get('/:id',async (req,res)=>{
    try {
       evaluation =  await Evaluation.findById(req.params.id);
       res.status(200);
       res.json(evaluation);
    } catch (error) {
        res.json([]);
    }
});

router.get('/organization/:organizationid',async (req,res)=>{
    try {
        evaluation = await Evaluation.find({organizationid : req.params.organizationid});
        res.status(200);
        res.json(evaluation);
    } catch (error) {
        res.json([]);
    }
});


module.exports = router;