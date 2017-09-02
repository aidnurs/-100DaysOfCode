var express=require('express')
var app=express()

app.get('/home',function () {
  console.log(2);
})

app.listen(8000)
