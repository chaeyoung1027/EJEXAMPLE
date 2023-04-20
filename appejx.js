const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    console.log('/ get start ejs test...');
    fs.readFile('test02.ejs','utf-8', (err, data)=>{
       if(err){
            console.log("파일 읽기 에러"+err);
       } else {
            res.send(ejs.render(data));
       }
        
    });
        
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});

//git remote add origin 
//npm i ejs 로 모듈 깔기
//C:\Users\chaeyoung\Desktop\EJEXAMPLE>npm install express ejs