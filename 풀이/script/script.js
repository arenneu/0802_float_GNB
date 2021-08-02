$(function(){
    $("#gnb li.mainLi").mouseover(function(){
        $("#gnb .subMenu").stop().slideDown(400);
        $("#subMenuBG").stop().slideDown(400);
    });
    $("#gnb li.mainLi").mouseout(function(){
        $("#gnb .subMenu").stop().slideUp(80);
        $("#subMenuBG").stop().slideUp(80);
    });
});