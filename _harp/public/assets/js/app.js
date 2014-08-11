Parse.initialize("yA7XHsujcGAU57AUxBbvBNg20BmlGHQCgbpExFKd", "3QeS4qSg70D0zBs25nGQqRUOkUYInsLU443pXPha");

/* User Creation */
$('#submit').click(function(go){

  var user = new Parse.User();
  var inputs = $('#signup .form-control');
  var params = {};

  inputs.each(function() {
    params[this.name] = $(this).val();
  });
  console.log(params);

  user.set("username", params.email);
  user.set("password", params.password);
  user.set("email", params.email);

  // other fields can be set just like with Parse.Object
  // user.set("phone", "415-392-0202");

  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      alert(user);
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
  go.preventDefault();
});
