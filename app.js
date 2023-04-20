const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//ejs모듈 추가
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    console.log('/ get start ejs test...');
    res.render('ejsex03',{
        dataArr:[
            {name:'ive리즈', age : 20},
            {name:'ive장원영', age : 20},
            {name:'ive안유진', age : 21},
            {name:'ive레이', age : 19}

        ]
    });
        
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});

//git remote add origin 
//npm i ejs 로 모듈 깔기
//C:\Users\chaeyoung\Desktop\EJEXAMPLE>npm install express ejs