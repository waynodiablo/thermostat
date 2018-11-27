function Thermostat () {
  Thermostat.temp = 20;
  Thermostat.isPowerSaving = true;


  Thermostat.up = function() {
    if ( this.isPowerSaving ) {
      if ( this.temp < 25 ) {
        this.temp ++;
      };
    }
    else {
      if ( this.temp < 32 ) {
        this.temp ++;
      };
    };
  };

  Thermostat.down = function() {
      if ( this.temp > 10 ) {
        this.temp --;
      // }
      // else {
      //   alert( "Minimum temperature is 10 degree!")
    };
  };

  Thermostat.togglePowerSaving = function() {
    this.isPowerSaving = !this.isPowerSaving;
  }

  Thermostat.reset = function() {
    this.temp = 20;
  };



};
