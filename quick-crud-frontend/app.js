function insertUserElements(users){
  var userElements = users.map(function(user){
    var userString = [user.first_name, user.last_name].join(' ');
    var li = document.createElement("li");
    var textNode = document.createTextNode(userString);
    li.appendChild(textNode);
    return li;
  });
  $('.users').append(userElements);
}

$(document).ready(function(){
  console.log('sanity check');
  $.get('http://localhost:3000/users', function(users){
    insertUserElements(users);
  });
});
