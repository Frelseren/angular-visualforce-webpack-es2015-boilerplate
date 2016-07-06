describe("unique pipe", function() {
  var input = [{
    "id": "11",
    "name": "Mr. Nice",
  }, {
    "id": "12",
    "name": "Narco",
  }, {
    "id": "13",
    "name": "Bombasto"
  }, {
    "id": "14",
    "name": "Dr IQ"
  }, {
    "id": "15",
    "name": "Mr. Nice"
  }];

  beforeEach(module("sampleApp"));
  it("should return 4 heroes with unique names", inject(function(uniquePipeFilter) {
    var key = 'name';
    expect(uniquePipeFilter(input, key)).not.toEqual(input);
    expect(uniquePipeFilter(input, key).length).toEqual(4);
  }));
});