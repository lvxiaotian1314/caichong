window.onload=window.onresize=function(){
    var wid=document.body.clientWidth
    //iphone5->320
    var htmlPx =wid/320*10
    document.getElementsByTagName("html")[0].style.fontSize=htmlPx+"px"
}
