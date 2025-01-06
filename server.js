// // const  chalk  = require('chalk');
// import chalk from 'chalk';
//  console.log("hello");
//  console.log(chalk.blue('go'), chalk.red('leave me'), chalk.yellow('now'));
 
const express = require('express');

const app = express();


app.get('/', (req,res)=>{
    res.send('hello home page');
});
app.get('/whether', (req, res) => {
    res.send('Ur whether');
});
app.listen(3000, () => {
    console.log("server is running");
    
})