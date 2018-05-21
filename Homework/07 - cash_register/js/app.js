// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

var total = 0;

$('#entry').submit(function (event) {
  event.preventDefault();

  var currentValue = $('#newEntry').val();



  var newEntry = parseFloat(currentValue);

  $('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>');

  total = total + newEntry

  	$('#total').html('$' + total)

  	$('#newEntry').val('')
  });