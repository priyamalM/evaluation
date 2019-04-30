express = require('express');
bodyparser = require('body-parser');
Mongoose = require('mongoose');
config = require('./config/keys'); 

//define routes
questionRoutes = require('./routes/api/questionroutes');
eventRoutes = require('./routes/api/eventroutes');


var app = express();
app.use(bodyparser.json());

//database connect.
Mongoose.connect(config.URI,{useNewUrlParser: true})
.then(()=>{console.log("connection created")})
.catch((err)=>{console.log(`server connection couldn't be established ${err}`)})

app.use('/api/questions',questionRoutes);
app.use('/api/events',eventRoutes);

var port = 5000;
//starting the server
app.listen(port,()=>{
    console.log(`server started from port ${port}`);
});