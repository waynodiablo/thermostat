function Thermostat () {
  Thermostat.temp = 20;



  Thermostat.up = function() {
    this.temp ++;
  };

  Thermostat.down = function() {
      if ( this.temp > 10 ) {
        this.temp --;
      // }
      // else {
      //   alert( "Minimum temperature is 10 degree!")
      };
  };


};
