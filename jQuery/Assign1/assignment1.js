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
                x += '<tr>';
                x += '<td>' +
                    value.id + '</td>';

                x += '<td>' +
                    value.title + '</td>';

                x += '<td>' +
                    value.url + '</td>';

                x += '<td>' +'<img src="'+value.thumbnailUrl +'" width="50px" height="50px">'+
                     '</td>';

                x += '</tr>';
            });
//
            //INSERTING ROWS INTO TABLE 
            $('#table').append(x);
        }

    })


});