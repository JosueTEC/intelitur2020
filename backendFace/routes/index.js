const { Router } = require('express');//requiero lo que me permite crear las rutas
const router = Router();



//puedo requerir la base de datos para poder trabajarla
//IMPORTANTE se obvia la autenticacion usada
//recortar usar async await

//initial path
router.get('/', (req,res)=>{
    res.send('initial path');
});


//publications
router.get('/publication',(req,res)=>{
    res.status(200).send('get publications');
})

router.post('/publication',(req,res)=>{
    res.status(200).send('post publications');
})

router.delete('/publication',(req,res)=>{
    res.status(200).send('delete publications');
})

router.put('/publication',(req,res)=>{
    res.status(200).send('put publications');
})


//comments
router.get('/comments',(req,res)=>{
    res.status(200).send('get comments');
})
router.post('/comments',(req,res)=>{
    res.status(200).send('post comments');
})





module.exports = router;//exporto para usarlo el archivo principal