window.onload = function() {
  var url = 'http://www.omdbapi.com/?t=inception';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if(request.status === 200) {
      var jsonString = request.responseText;
      var inception = JSON.parse(jsonString);
      console.log(inception);
      movieP.innerText = inception.Title;
    }
  }
  request.send(null);
};

var search = function() {
  document.getElementById("search").onclick = function() {
    
  }
};

