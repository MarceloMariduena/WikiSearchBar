$(function() {

  
    var backgroundImg = '' //Change Me 
    
  
    
    $('#resultsPage').css('background-image', 'url(' + backgroundImg + ')'); //allows a variable for changing background imgs based in an array, see weather app
    
  
  
  
    $('#search').click(function() {
  
      var searchTerm = $('#searchTerm').val();
  
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?"
  
          
      $.ajax({ //ajax call for JSON data see console log data wiki API method for retreiving data, doesn't automatically spit back JSON without an AJAX call
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data) {
          console.log(url);
         // console.log(data[1][0])//search term
          // console.log(data[2][0])//search description, 1st result
          // console.log(data[3][0])//address of 1st result
  
          $('#output').html(''); //clears all data prior to running/re-running for loop
  
          for (var i = 0; i < data[1].length; i++) {
            $('#output').append("<a href=" + data[3][i] + " target='blank'><h1>" + data[1][i] + "</h1></a>" + "<h3>" + data[2][i] + "</h3><br>");
          }
  
        },
        error: function(errorMessage) {
          alert("Error");
  
        },
  
      });
  
    });
  
    $('#searchTerm').bind('keypress', function(e) { //stack overflow answer to keybinding search to enter key, keycode 13
      if (e.keyCode == 13) {
        $("#search").click(); //if enter is pressed run #search.click function above, this is outside of that funtcion
      }
    });
  /*   
  $('#searchTerm').click(function() {
        $('#output').html('');       
     }); 
  */  
});




/************ VANILLA JS 
let backgroundImg = "";
document.getElementById("resultsPage").style.backgroundImage = "url(" + backgroundImg + ")";

function deploy(){
    let searchTerm = document.getElementById("searchTerm").value;

    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?";

    $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data) {
            console.log(url);
  
            document.getElementById("output").innerHTML = ""; 
  
            for (let i = 0; i < data[1].length; i++) {
                document.getElementById.append("<a href=" + data[3][i] + " target='blank'><h1>" + data[1][i] + "</h1></a>" + "<h3>" + data[2][i] + "</h3><br>");
            }
  
        },
        error: function(errorMessage) {
          alert("Error");
  
        },
  
    });

}

document.getElementById("search").addEventListener("click", deploy);

document.getElementById("searchTerm").bind("keypress", function(e) {
    if (e.keyCode == 13) {
        document.getElementById("search").click;
    }
});
*****************************/
