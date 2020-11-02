$(document).ready(function () {

  $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "GET",
      success: (data) => {
          var x=" ";

          $.each(data, function (key, value) {

              
              //CONSTRUCTION OF ROWS HAVING 
              // DATA FROM JSON OBJECT 
              x += '<div id="newDiv">';
              x += '<div>';
              x += '<p>' +'<img src="'+value.thumbnailUrl +'" width="50px" height="50px">'+
                   '</p>';
              x += '</div>';
              x += '</div>';
          });
//
          //INSERTING ROWS INTO TABLE 
          $('#myDiv').append(x);
      }
  })
});

function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "inside-Nav") {
      x.className += " responsive";
    } else {
      x.className = "inside-Nav";
    }
  }

  

