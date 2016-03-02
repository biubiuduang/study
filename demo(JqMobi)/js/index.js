/**
 * Created by Jacky.Wang on 2016/1/15.
 */
$().ready(function(){

    $.ajax({
        url : "test.json",
        dataType : "json",
        success : function(msg){
            $("#ajax #null").append("<p>"+msg[2].name+"</p>");
        }
    });

    $(window).resize(function(){
        var winWidth  = $(window).width();
        if(winWidth>1000){
            console.log(winWidth);
        }else{
            console.log(1111111111);
        }
    });
});

function show(){
    alert("加载成功。。。。");
}

/******* actionsheet ********/
function showCustomHtmlSheet() {
    $("#afui").actionsheet('<a>Back</a><a onclick="alert(\'hi\');" >Show Alert 3</a><a  onclick="alert(\'goodbye\');">Show Alert 4</a><a class="red" onclick="alert(\'你好！\');">Show Alert 5</a>');
}
function showCustomJsonSheet(){
    $("#afui").actionsheet(
        [{
            text: 'back',
            cssClasses: 'red',
            handler: function () {
                $.ui.goBack();
            }
        }, {
            text: 'show alert 5',
            cssClasses: 'blue',
            handler: function () {
                alert("hi");
            }
        }, {
            text: 'show alert 6',
            cssClasses: '',
            handler: function () {
                window.open("#home","_self");
            }
        }]);
}

/****** popup ******/
function showPopup1(){
    $("#afui").popup("这个是一个弹出框");
}
function showPopup2() {
    $("#afui").popup({
        title: "Alert! Alert!",
        message: "This is a test of the emergency alert system!! Don't PANIC!",
        cancelText: "Cancel me",
        cancelCallback: function () {
            console.log("cancelled");
        },
        doneText: "I'm done!",
        doneCallback: function () {
            console.log("Done for!");
        },
        cancelOnly: false
    });
}

function showPopup3() {
    $("#afui").popup({
        title: "Login",
        message: "Username: <input type='text' class='af-ui-forms'><br>Password: <input type='password' class='af-ui-forms' style='webkit-text-security:disc;'>",
        cancelText: "Cancel",
        cancelCallback: function () {},
        doneText: "Login",
        doneCallback: function () {
            alert("Logging in")
        },
        cancelOnly: false
    });
}

/****** 如果文档触摸出发侧边栏划出 ******/
if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
    var script = document.createElement("script");
    script.src = "plugins/af.desktopBrowsers.js";
    var tag = $("head").append(script);
}