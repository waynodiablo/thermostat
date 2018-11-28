'use strict';

function Thermostat() {
  this.MIN_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this.MAX_TEMP = 32;
  this.MAX_ECO_TEMP = 25;
  this.isPowerSaving = true;
  this.temp = 20;
}

  Thermostat.prototype.up = function() {
    if ( this.isPowerSaving ) {
      if ( this.display() < this.MAX_ECO_TEMP ) {
        this.temp ++;
      };
    }
    else {
      if ( this.display() < this.MAX_TEMP ) {
        this.temp ++;
      };
    };
  };

  Thermostat.prototype.down = function() {
      if ( this.display() > this.MIN_TEMP ) {
        this.temp --;
    };
  };

  Thermostat.prototype.togglePowerSaving = function() {
    this.isPowerSaving = !this.isPowerSaving;
  };

  Thermostat.prototype.reset = function() {
    this.temp = this.DEFAULT_TEMP;
  };

  Thermostat.prototype.energyUsage = function() {
    var text = "high-usage"
    if (this.display() < 18) {
      text =  "low-usage";
    } else if (this.display() < 25) {
      text = "medium-usage";
    };
    return text
  };

  Thermostat.prototype.display = function() {
    return this.temp;
  }
