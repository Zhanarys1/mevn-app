   const express = require('express');
   const mongoose = require('mongoose');
   const morgan = require('morgan');
   const path = require('path');
   const cors = require('cors');
   const app = express();
   app.use(cors());
   app.set('port', 3000);
   mongoose.connect('mongodb+srv://Zhanarys:18012006@cluster0.1tzal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true})
   .then(db => console.log('[OK] DB is connected'))
     .catch(err => console.error(err));
  
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(morgan('dev'));
  app.use('/api/records', require('./routes/records'));
   console.log(app.get('port'));
   app.listen(app.get('port'),() => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
   });

   