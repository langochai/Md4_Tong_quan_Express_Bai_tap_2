const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const upload = multer();

app.set('views','./views');
app.set('view engine','ejs');
app.get('/',(req, res)=>{
    res.render('create')
});
let employeeList = []
app.post('/view',upload.none(),(req,res)=>{
   if(req.body.id && req.body.name && req.body.department){
       const employee = {
           id: req.body.id,
           name: req.body.name,
           department: req.body.department
       };
       employeeList.push(employee);
       res.render('view',{list:employeeList});
   } else if (req.body.id_delete){
       employeeList = employeeList.filter(e=>e.id !== req.body.id_delete);
       res.render('view',{list:employeeList});
   } else {
       res.send('no segs is done :(((((')
   }
});
app.listen(PORT,()=>{
    console.log(`segs at port ${PORT}`)
});