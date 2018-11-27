describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(Thermostat.temp).toBe(20);
  });

  it("increases temperature with an up function", function() {
    Thermostat.up();
    expect(Thermostat.temp).toBe(21);
  });

  it("decreases temperature with a down function", function() {
    Thermostat.down();
    expect(Thermostat.temp).toBe(19);
  });

  it("has a minimum of 10 degrees", function() {
      Thermostat.temp = 11;
      Thermostat.down();
      Thermostat.down();
      // Thermostat.down().repeat(2);
      expect(Thermostat.temp).toBe(10);
  });

  describe("when power saving mode is on", function() {
    it("has a maximum temperature 25 degrees", function() {
      Thermostat.temp = 25;
      Thermostat.up();
      expect(Thermostat.temp).toBe(25);
    });
  });

  describe("when power saving mode is off", function() {
    it("has a maximum temperature 25 degrees", function() {
      Thermostat.togglePowerSaving()
      Thermostat.temp = 32;
      Thermostat.up();
      expect(Thermostat.temp).toBe(32);
    });
  });


});
