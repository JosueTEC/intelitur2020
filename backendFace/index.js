const express = require('express');
const app = express();




//variables--------------------------------------------------
app.set('appName','InteliturFacebook');
app.set('port',3000);



//middlewares-------------------------------------------------
app.use(express.json());//to use json 
//routes
app.use('/api',require('./routes/index'));//requiero las rutas




app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
});