/**
 * Created by Jacky.Wang on 2016/2/15.
 */
function saveStorage(id){
    var uid = document.getElementById(id);
    var str = uid.value;
    //用键值对的储存数据
    sessionStorage.setItem("message",str);
}

function loadStorage(id){
    var uid = document.getElementById(id);
    var msg = sessionStorage.getItem("message");
    uid.innerHTML = msg;
}

function localSaveStorage(id){
    var uid = document.getElementById(id);
    var str = uid.value;
    localStorage.setItem("localMessage",str);
}

function loadLocalStorage(id){
    var uid = document.getElementById(id);
    var msg = localStorage.getItem("localMessage");
    uid.innerHTML = msg;
}