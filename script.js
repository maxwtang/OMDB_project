$('.search').click(function(){
    $('ul').empty();
 var searchQuery = $('#search-field').val().trim();
 $.ajax({
   url: 'https://www.omdbapi.com/?s=' + searchQuery + '&apikey=ae9c3f30',
   method: 'GET'
 }).done(function(data) {
   var arrayOfMovies = data.Search;
   arrayOfMovies.forEach(function(eachMovie) {
     var imdbID = eachMovie.imdbID;
     $.ajax({
       url: 'https://www.omdbapi.com/?i=' + imdbID + '&apikey=ae9c3f30',
       method: 'GET'
     }).done(function(dater) {
         $('ul').append ('<li>' + '<h1>' + dater.Title + '</h1><br>' + dater.Ratings[1].Source + ': ' + dater.Ratings[1].Value + '</li>');
       });
   });    
 });
});