mongoose = require('mongoose');
Schema = mongoose.Schema;

const EvaluationSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    participants : {
        type : Number,
        default : 0
    },
    startdate : {
        type : Date,
        default : Date.now
    },
    enddate : {
        type : Date,
        required : false
    },
    availability : {
        type : String,
        enum : ["PUBLIC","ADMIN","PRIVATE"],
        default : "ADMIN"
    },
    organizationid : {
        type : String
    }
});

Evaluation = mongoose.model('Events',EvaluationSchema);
module.exports = Evaluation;