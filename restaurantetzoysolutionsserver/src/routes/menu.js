const { Router}= require('express');
const router= Router();

const _=require('underscore');

const menu= require("../menusbd.json");
const bdpostgres= require("../database.js");

router.get('/',(req,res) => {
    
    bdpostgres.query('SELECT * FROM restaurantetzoysolutions.menu;', (err,row,fields) => {
        console.log('pasa por aqui2');
        if(!err){
            res.json(row);
        }else{
            console.log(err);

        }
        
        });

//    res.json(menu);
    });


    router.post('/',(req,res) => {
        const {id, nombre, valor}=req.body;
        if(id && nombre && valor){
            const id=menu.length+1;
            const newmenu={...req.body,id};
            menu.push(newmenu);
          res.json(menu);
    
        }else{
    
    res.status(500).json({error:'there was a errer.'});
        }
        res.json(data);
        });




        router.delete('/:id',(req,res) => {
            const { id }=req.params;
            _.each(menu,(men,i) => {
                
                console.log(id);
                if(men.id==id){
                                    menu.splice(i,1);
                  }
            });
            
            res.json(menu);
            });
    


            router.put('/:id',(req,res) => {
                const { id }=req.params;
                const { nombre, valor}=req.body;

                _.each(menu,(men,i) => {
                    if(id && nombre && valor){
                        console.log(id);
                        if(men.id==id){
                            
                    men.nombre=nombre;
                    men.valor=valor;
                    
                          }
                      
                
                    }else{
                
                res.status(500).json({error:'there was a errer.'});
                    }
                    
                });
                
                res.json(menu);
                });

    module.exports=router;