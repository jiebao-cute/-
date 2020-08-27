let html = document.querySelector('#html');
let style = document.querySelector("#style");
//文字加注释，不然会影响下面的代码
let string = `
/*hello
-接下来我演示下我的前端功底
-首先我要准备一个div
*/
#div1{
   
   width: 200px;
   height: 200px;
}
/*接下来我要把div变成一个太极八卦图
-请欣赏
-首先，将div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*
-八卦是阴阳相结合
-一黑一白
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
-八卦由阴阳两极调和而成
-逐渐形成八卦图
*/
#div1::before{
   width:100px;
   height:100px;
   border:1px solid red;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   background: #000;
   border-radius: 50%;
   border:none;
   background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    border:1px solid red;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
 }
`;
//string = string.replace(/\n/g,"<br>");//将页面显示的空格全部变成换行
let string2 = "";
//console.log(string.length);
let n = 0; 
//demo.innerHTML = string.substring(0,n);//这句话去掉，n就不会从0开始，上面的n就需要改成-1

  let step = () =>{
  setTimeout(()=>{
  //简化版本，如果是回车，就是br，如果不是就是strin[n]
  //string2 += string[n] === "\n"?"<br>":string[n];
  if(string[n]=== '\n'){
  //如果是回车，就不照搬
  string2 = string2 + '<br>';//html里面回车表示<br>
  }else if(string[n] === " "){
  string2 += "&nbsp;";//html里面空格表示&nbsp
  } else {
    //如果不是回车，就照搬
  string2 = string2 +string[n];}
  html.innerHTML = string2;
  style.innerHTML = string.substring(0,n); //直接写string2会导致里面出现空格等html里面的标签
  html.scrollTo(0,999999);
  window.scrollTo(0,99999);//滚动条自动滚动到99999
  if ( n < string.length-1){
      //不是最后一个就继续
      n += 1;
      step();
  }else{
      //n是最后一个，就结束
  }
  },100);
};
step();

