
var palindrome = function(string)  {
  var stringToCheck = string.replace(/ /gi, "")
  var reversedString = stringToCheck.split('').reverse().join('');
  if (reversedString === stringToCheck) {
    alert("U got yo self a palindom, bro")
  }
  else {
    alert("You don't have yourself a palindrome, my friend")
  }
}

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    palindrome(userInput);
  });

});
