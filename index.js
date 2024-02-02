import express from "express";
import accountController from './/controllers/accounts.js'
import database from './services/database.js'
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/accounts',accountController);

database
.sync()
.then(res =>{
    console.log(res);
    app.listen(port,()=>{
        console.log(`server is running via port ${port}`);
    })
})
.catch(err=>{
    console.log(err);
})


const port = 3001
