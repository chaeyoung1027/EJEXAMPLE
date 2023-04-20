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
    res.render('ejsex02',{
        jemok : 'ejs 제목 데이터',
        count : 5   //변수명, 값을 넘겨줌
    });  //10번째 줄에 ejs라고 지정했기 때문에 ejsex02.ejs가 아니라 ejsex로 써도 된다.
    //views를 사용했기 때문에 아래 코드를 실행할 필요가 없다.
    // fs.readFile('ejsex01.ejs','utf-8', (err, data)=>{
    //    if(err){
    //         console.log("파일 읽기 에러"+err);
    //    } else {
    //         res.send(ejs.render(data));
    //    }
        
    // });  
        
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});

//git remote add origin 
//npm i ejs 로 모듈 깔기
//C:\Users\chaeyoung\Desktop\EJEXAMPLE>npm install express ejs