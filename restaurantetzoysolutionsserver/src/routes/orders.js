const { Router}= require('express');
const router= Router();





router.get('/',(req,res) => {
    const data={
        "pedido":"56465",
        "monto":65465
    };

    res.json(data);
    });




    module.exports=router;