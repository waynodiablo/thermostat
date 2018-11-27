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
      Thermostat.temp = 10;
      Thermostat.down();
      expect(Thermostat.temp).toBe(10);
  });




});
