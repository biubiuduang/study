/**
 * Created by Jacky.Wang on 2015/9/16.
 */
$().ready(function(){
    //container 容器，count 总页数 pagingindex 当前页数
    function setpaging(container, count, pagingindex) {
        //alert(document.getElementById("pagging"));
        //alert(document.getElementsByClassName("paging")[0]);
        var container = container;
        var count = count;
        var pagingindex = pagingindex;
        var a = [];
        //总页数少于10 全部显示,大于10 显示前3 后3 中间3 其余....

        //当前页数为第一页的时候  上一页的样式要为白色
        if (pagingindex == 1) {

            a[a.length] = "<a href=\"#\" class=\"prev unclick\">< 上一页</a>";
        } else {
            //当前页数不是第一页的时候  上一页的样式为可点状态
            a[a.length] = "<a href=\"#\" class=\"prev\">< 上一页</a>";
        }
        function setpagingList() {
            if (pagingindex == i) {
                a[a.length] = "<a href=\"#\" class=\"link\">" + i + "</a>";
            } else {
                a[a.length] = "<a href=\"#\">" + i + "</a>";
            }
        }


        //总页数小于10
        if (count <= 10) {
            for (var i = 1; i <= count; i++) {
                setpagingList(i);
            }
        }//总页数大于10页
        else {
            if (pagingindex <= 4) {
                for (var i = 1; i <= 5; i++) {
                    setpagingList();
                }
                a[a.length] = "...<a href=\"#\">" + count + "</a>";//...总页数
            } else if (pagingindex >= count - 3) {
                a[a.length] = "<a href=\"#\">1</a>...";
                for (var i = count - 4; i <= count; i++) {
                    setpagingList();
                }
            }
            else { //当前页在中间部分
                a[a.length] = "<a href=\"#\">1</a>...";
                for (var i = pagingindex - 2; i <= pagingindex + 2; i++) {
                    setpagingList();
                }
                a[a.length] = "...<a href=\"#\">" + count + "</a>";
            }
        }


        //当前页为最大页的时候  要使下一页的样式变为白色  不能点击状态
        if (pagingindex == count) {
            a[a.length] = "<a href=\"#\" class=\"next unclick\">下一页 ></a>";
        } else {
            a[a.length] = "<a href=\"#\" class=\"next\">下一页 ></a>";
        }

        //向获取到的div中加入这些分页a链接
        container.innerHTML = a.join("");


        //事件点击
        var pagingClick = function() {
            var oAlink = container.getElementsByTagName("a");
            var inx = pagingindex; //初始的页码

            oAlink[0].onclick = function() { //点击上一页
                if (inx == 1) {
                    return false;
                }
                inx--;
                setpaging(container, count, inx);
                return false;
            }


            for (var i = 1; i < oAlink.length - 1; i++) { //点击页码
                oAlink[i].onclick = function() {
                    inx = parseInt(this.innerHTML);
                    setpaging(container, count, inx);
                    return false;
                }
            }


            oAlink[oAlink.length - 1].onclick = function() { //点击下一页
                if (inx == count) {
                    return false;
                }
                inx++;
                setpaging(container, count, inx);
                return false;
            }
        } ()
    }


    setpaging(document.getElementsByClassName("paging")[0],15,1);

});