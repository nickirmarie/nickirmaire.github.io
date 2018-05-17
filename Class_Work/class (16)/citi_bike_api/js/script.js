 h// As a User
// When I visit the site
// I expect to see the names of the all the stations



// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list



// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only



// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection


// answer: 
$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function(stations) {
    //filter helps out like (map and for each) it iterates - looks through the array and give access to every element
    var freeStation = stations.filter(function(station){
    return stations.free>0;
    // return -- filter doumentation
    //if function - if anything is ture, it will show up on the list

    var topFifty = freeStation.splice(0,50);
    //50 elements from that index  - starts at 0 --> to 50

    topFifty.forEach(function(stations){
      var stationName = station.name;
      var numberFree = stations.free;
      $(".bikes").append("<li>" + stationName + ":" + numberFree + "</li>")
      //string concatination - representing a string as an html tag 
    })
    },
  });

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: onSuccess
    // callback becuase ajax gets the data and then calls back to us with the data and we do something with it
  error: onError
  // tells the user there is an error 
});

  function onSuccess(stations) {
    //filter helps out like (map and for each) it iterates - looks through the array and give access to every element
    var freeStation = stations.filter(function(station){
    return stations.free>0;
    // return -- filter doumentation
    //if function - if anything is ture, it will show up on the list

    var topFifty = freeStation.splice(0,50);
    //50 elements from that index  - starts at 0 --> to 50

    topFifty.forEach(function(stations){
      var stationName = station.name;
      var numberFree = stations.free;
      $(".bikes").append("<li>" + stationName + ":" + numberFree + "</li>")
      //string concatination - representing a string as an html tag 
    })
    },

  //   stations.filter(bikes => stations.bike)

  //   stations.splice(50, stations.length - 1)

  //   stations.forEach(function(stations) {
    // $('body').append(stations.name + '<br>')
});

