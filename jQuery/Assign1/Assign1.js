//Check if Dom is ready
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
                x += '<p>' +'<img src="'+value.thumbnailUrl +'" width="100px" height="100px">'+
                     '</p>';

                x += '<p>' +
                value.title + '</p>';

                x += '<p>' +
                    value.id + '</p>';
                x += '</div>';
                x += '</div>';
            });
//
            //INSERTING ROWS INTO TABLE 
            $('#myDiv').append(x);
        }

    })


});