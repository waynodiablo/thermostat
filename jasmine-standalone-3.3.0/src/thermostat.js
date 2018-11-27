function Thermostat () {
  Thermostat.temp = 20;
  Thermostat.up = function() {
    this.temp += 1;
  };
};
