const express = require('express');
const app = express();
const cors = require('cors');

var appRouter = require('./routes/appRouter');

app.use(cors());

app.use('/', appRouter);



var server = app.listen(8081, function () 
{
   var host = server.address().address; 
   var port = server.address().port;

   console.log("App listening at http://%s:%s", host, port);
});


