var btn = document.querySelector('#submitbutton');
btn.addEventListener('click',listener1);

function listener1(){
  
    var title = document.querySelector("#title").value;
    document.getElementById("booktitle").innerHTML = title;

    var subtitle = document.querySelector("#subtitle").value;
    document.getElementById("booksubtitle").innerHTML = subtitle;

    var author = document.querySelector("#author").value;
    document.getElementById("bookauthor").innerHTML = author;

    var publishe = document.querySelector("#publisher").value;
    document.getElementById("bookpublisher").innerHTML = publishe;

    var year = document.querySelector("#year").value;
    document.getElementById("bookyear").innerHTML = year;

    var color = document.querySelector("#background").value;
    document.getElementById("bookcover").style.background = color;

    
  }