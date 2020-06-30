function apiRequest() {
    
    console.log(movieName);
    console.log(dataRequest);


    
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        stringRecovered=this.responseText;
        parsingRequest();
        dynamicSearch();

      }
    };
    xhttp.open("GET", dataRequest, true);
    xhttp.send();
}


function parsingRequest () {
    listObject = JSON.parse(stringRecovered);
    console.log(listObject);
    console.log(stringRecovered);
    return listObject;
}





function dynamicSearch (){


  for (let i = 0; i < listObject.Search.length; i++) {
    document.getElementById("movieText"+i).innerHTML = listObject.Search[i].Title+"<hr>";
    document.getElementById("movieImage"+i).src = listObject.Search[i].Poster;

  }
}






export default functions;