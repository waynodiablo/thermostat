$( document ).ready(function() {
  var thermostat = new Thermostat;
  function EnergyUsage() {
    if(thermostat.energyUsage() == "low-usage"){
      $( "#temp_section").css({"backgroundColor":"green"});
    } else if(thermostat.energyUsage() == "medium-usage"){
      $( "#temp_section").css({"backgroundColor":"black"});
    } else {
      $( "#temp_section").css({"backgroundColor":"red"});
    }
  }
  $( "#current_temperature" )[0].innerHTML = thermostat.display();
  EnergyUsage();
  $( "#up" ).click(function( event ) {
    thermostat.up();
      $( "#current_temperature" )[0].innerHTML = thermostat.display();
      console.log(thermostat.display());
      EnergyUsage();
});


  $( "#down" ).click(function( event ) {
  thermostat.down();
    $( "#current_temperature" )[0].innerHTML = thermostat.display();
    console.log(thermostat.display());
    EnergyUsage();
});

  $( "#reset" ).click(function( event ) {
  thermostat.reset();
    $( "#current_temperature" )[0].innerHTML = thermostat.display();
    console.log(thermostat.display());
    EnergyUsage();
});

$( "#power_saving" ).click(function( event ) {
  thermostat.togglePowerSaving();
  $( "#power_status" )[0].innerHTML = (thermostat.isPowerSaving) ? "ON" : "OFF";
});


//
// Using the core $.ajax() method
$.ajax({

    // The URL for the request
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=6feacc326aabc416932cf8bcd7eb9c89",

    // Whether this is a POST or GET request
    type: "GET",

    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
     console.log( json.main.temp )
    $( "#city_temp" )[0].innerHTML = json.main.temp;
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    console.log( "The request is complete!" );
  });

});
