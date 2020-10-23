// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        username: "required",
        password: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        password_confirm: {
          required: true,
          minlength: 5,
          equalTo: "#password"
      }
      },
      // Specify validation error messages
      messages: {
        username: "Please enter username",
       
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
      
    });
    var myOptions = {
      val1 : 'Hyderabad',
      val2 : 'Gandhinagar'
  };
  var mySelect = $('#myCity');
  $.each(myOptions, function(val, text) {
      mySelect.append(
          $('<option></option>').val(val).html(text)
      );
  });
  });

  $(document).ready(function() {
    $('#check').click(function() {
      if ($('#test-input').attr('type') == 'text') {
        $('#test-input').attr('type', 'password');
      } else {
        $('#test-input').attr('type', 'text');
      }
    });
  });

  function checkPasswordMatch() {
    var password = $("#test-input").val();
    var confirmPassword = $("#cPassword").val();
    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("<font color='red' >Passwords does not match!</font>");
    else
        $("#CheckPasswordMatch").html("Passwords match.");
}
$(document).ready(function () {
   $("#cPassword").keyup(checkPasswordMatch);
});