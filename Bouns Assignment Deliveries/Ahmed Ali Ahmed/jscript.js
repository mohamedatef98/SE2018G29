var generate=document.querySelector('.generate');
var btitle=document.querySelector('#bookTitle');
var subTitle=document.querySelector('#subTitle');
var author=document.querySelector('#author');
var backColor=document.querySelector('#backColor');
var pub=document.querySelector('#pub');
var pyear=document.querySelector('#pyear');
var btitleWanted=document.querySelector('.btitle');
var subTitleWanted=document.querySelector('.subtitle');
var authorWanted=document.querySelector('.author');
var pubWanted=document.querySelector('.publisher');
var pubYearrWanted=document.querySelector('.year');



generate.onclick=function () {

    
    if(backColor.value!="")document.querySelector('.cover').style.backgroundColor=backColor.value ;
    if(btitle.value!="")btitleWanted.textContent=btitle.value;
    if(subTitle.value!="")subTitleWanted.textContent=subTitle.value;
    if(author.value!="")authorWanted.textContent="Written By:"+author.value;
    if(pub.value!="")pubWanted.textContent="publisher:"+pub.value;
    if(pyear.value!="")pubYearrWanted.textContent="Published At:"+pyear.value  
};