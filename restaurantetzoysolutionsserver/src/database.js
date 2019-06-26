const {Pool, Client}= require('pg');
const connectionString = 'postgressql://postgres:200815238@localhost:5432/tzoysolutions';



const client=new Client({
connectionString:connectionString

});

client.connect(function (err){
if(err){

    console.log(err);
    return;
}else{
    console.log(" Base de datos Conectada ");

}

});




module.exports=client;