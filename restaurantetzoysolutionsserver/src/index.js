const express=require('express');
const app=express();
const morgan=require('morgan');

//setting
app.set('port',process.env.PORT || 3100);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/api/order',require('./routes/orders.js'));
app.use('/api/menu',require('./routes/menu.js'));

// starting the server
app.listen(app.get('port'),() => {
console.log(`Server on por ${app.get('port')}`);



} );