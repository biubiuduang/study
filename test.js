/**
 * Created by Jacky.Wang on 2015/9/18.
 */


window.onload = function(){
    var firstName;
    firstName = 'one';
    console.log(firstName);
    firstName = 'two';
    console.log(firstName);

    /* 获取id的方法 */

    /* if...else */
    var d = new Date();
    var time = d.getHours();
    if(time<=10){
        console.log("早上好");
    }else if(10<time && time<19){
        console.log("下午好");
    }else{
        console.log("晚安");
    }

    /* 时间戳 三种方法*/
    console.log(d.valueOf());  //当前毫秒的时间戳
    console.log(d.getTime());   //当前毫秒的时间戳
    console.log(Date.parse(d)); //把毫秒变成000显示

    /* 确认框 */
//        var r=confirm("请确认你的想法");
//        if( r == true){
//            alert("你点的是确认");
//        }else{
//            alert("你点的是取消");
//        }
    /* 提示框 */
//        var name = prompt("请输入您的名字");
//        if(name!=null && name!=""){
//            byId("div1").innerHTML = "您好 "+ name +",欢迎光临";
//        }else{
//            byId("div1").innerHTML = "请输入您的姓名";
//        }
    /* 函数 */
    function byId(id){
        var idName = document.getElementById(id);
        return idName;  // 返回值
    }
    function fun1(name){
        byId("div2").innerHTML = name + "函数被调用了！！！"
    }

    /* 调用函数 */
    byId("btn1").onclick = function(){
        fun1('我的');
    };

    /* 返回值 */
    function back(a,b){
        return(a+"我是不是变了啊?"+b)
    }
    byId("btn2").onclick = function(){
        byId("p1").innerHTML = back("你看","哈哈!");
    };

    /* 循环 */
    var a = "";
    for(var i =0;i<5;i++){
        a+="<li>数字是"+i+"</li>";
    }
    byId("ul1").innerHTML = a;

    var b = "";
    for(var i = 1;i<7;i++){
        b+="<h"+i+">这个是标题"+i+"</h"+i+">";
    }
    byId("div3").innerHTML = b;

    /* break */
    var c = 0 ;
    while(c<5){
        if(c == 3){break;}   //不含3
        byId("div4").innerHTML += "数字是" + c + "<br/>";
//            if(c == 3){break;}   //含3
        c++;
//            if(c == 3){break;}  //不含3
    }
    /* continue */

    /* for in */
    var d = ["中国","美国","日本"];
    var e;
    for(e in d){
        byId("div6").innerHTML += "我去过" + d[e] + "<br/>" ;
    }

//    try{
//        alert(f);
//    }catch(err){
//        byId("div7").innerHTML = "错误描述：" + err.description;
//    }

    byId("btn3").onclick = function(){
        timedCount();
    };
    byId("btn4").onclick = function(){
        stopCount();
    };

};


var g = 0;
var h ;
function timedCount(){
    document.getElementById("txt1").value = g;
    g++;
    h = setTimeout("timedCount()",1000);
}
function stopCount(){
    g = 0;
    setTimeout("document.getElementById('txt1').value = 0",0);
    clearTimeout(h);
}

