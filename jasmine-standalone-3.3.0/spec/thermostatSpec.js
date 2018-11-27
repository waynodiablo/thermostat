describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(Thermostat.temp).toBe(20);
  });
});
