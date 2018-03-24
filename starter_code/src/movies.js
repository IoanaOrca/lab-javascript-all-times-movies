/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var sumOfRatings=array.reduce(function(acc, item){
      var rateNumber=item.rate*1;    
      return acc+rateNumber;
    },0)
  
    return parseFloat((sumOfRatings/array.length).toFixed(2))*1;
  }
  console.log(ratesAverage(movies));

  // function ratesAverage(array){
  //   ///Byron's solution
  //   var rateArray = array.map(function(item){
  //     return item.rate;
  //   });

  //     var sumRate=rateArray.reduce(function(acc,item){
  //         return acc+number(Number(item));
  //     },0);

  //     return average = Number((sumRate / rateArray.length).toFixed(2));
  // }

  // Get the average of Drama Movies
  function dramaMoviesRate(array) {
    var dramaMovie=array.filter(function(item){
      return (item.genre.indexOf('Drama')>-1);
    });
    if (dramaMovie.length!=0) return ratesAverage(dramaMovie);
  }
  console.log('Drama movie average rating is: '+ dramaMoviesRate(movies))
  
  
  // Order by time duration, in growing order
  
  
  // How many movies did STEVEN SPIELBERG
 function howManyMovies(aArray){
   var dramaMovies = aArray.filter(function(item){
    return (item.genre.indexOf('Drama')>-1);
  });
 var dramaMoviesOfstevenSpielberg = dramaMovies.filter(function(item){
   return item.director==='Steven Spielberg';
 });
 if (dramaMovies!=0)
 return 'Steven Spielberg directed '+dramaMoviesOfstevenSpielberg.length+' drama movies!';
}

  // Order by title and print the first 20 titles
  
  
  // Best yearly rate average


