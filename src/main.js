let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是六六六
*我要展示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把画板变成一个八卦图
*请注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳相成
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个乾坤
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 26%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 100%);

}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
`;
// string=string.replace(/\n/g,'<br>')
let n = 0;
let string2 = "";
console.log(string.length);
html.innerHTML = string.substring(0, n);
let step = () => {
  setTimeout(() => {
    // console.log(n);
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    // string2 += string[n] === "\n" ? "<br>" : string[n];
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0,99999)
    html.scrollTo(0,99999)
    if (n < string.length - 1) {
      n++;
      step();
    }
  }, 50);
};
step();
