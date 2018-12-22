// JavaScript source code
var bookname; 
var Book_Subtitle;
var Author_Name;
var Background_color;
var Publisher;
var Publishing_year

//document.addEventListener("click", set_book_values());
    function get_book_values(){
        bookname = document.getElementById("book_title").value;
        Book_Subtitle = document.getElementById("book_sub").value;
        Author_Name = document.getElementById("author").value;
        Background_color = document.getElementById("back_color").value;
        Publisher = document.getElementById("pub").value;
        Publishing_year = document.getElementById("pub_year").value;
    }
    function set_book_values(){
    	document.getElementById("new-title").innerHTML = bookname;
    	document.getElementById("new-sub").innerHTML = Book_Subtitle;
    	document.getElementById("new-author").innerHTML = Author_Name;
    	document.getElementById("new-pub").innerHTML = Publisher;
    	document.getElementById("new-pub-year").innerHTML = Publishing_year;
    	
    	//document.getElementsById("for-color").style.backgroundColor = Background_color;


    	//alert("set book is working");
    }
   