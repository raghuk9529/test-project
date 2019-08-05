exp=require('express');
app=exp();
app.listen(1000);
bp=require("body-parser");
app.use(bp.json());
monjs=require("mongojs");
con=monjs("mongodb://localhost:27017/config")

app.get("/getProduct",function(req,res){
    con.products.find(function(err,resu){
       if(err)
        res.send(err);
        else
        console.log(resu);
        res.send(resu);
    })
  
})
app.post("/pdetailes",function(req,res){
rbody=req.body;

proid=parseInt(req.body.proid)
con.products.find({id:proid},function(err,result){
    if(err)
    res.send(err)
    else
   res.send(result)
    //console.log(result)
})
})