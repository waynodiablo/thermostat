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

  // attempted to add this function but breaks all tests
  // Thermostat.energyUsage = function(this.temp) {
  //   var text;
  //   switch (this.temp) {
  //     case < 18:
  //       text =  "low-usage";
  //       break;
  //     case < 25:
  //       text =  "medium-usage";
  //       break;
  //     default:
  //       text =  "high-usage";
  //   };
  //   return text
  // };


  Thermostat.togglePowerSaving = function() {
    this.isPowerSaving = !this.isPowerSaving;
  };

  Thermostat.reset = function() {
    this.temp = 20;
  };



};
