function produceDrivingRange(blockRange) {
  return function (start, destination) {
    start = parseInt(start.substr(0, start.length-2));
    destination = parseInt(destination.substr(0, destination.length-2));
    let tripRange = Math.abs(destination - start);

    return tripRange <= blockRange ? `within range by ${Math.abs(blockRange - tripRange)}` : `${Math.abs(blockRange - tripRange)} blocks out of range`;
  }
}

function produceTipCalculator(percentage) {
  return function (total) {
    return total * percentage;
  }
}

function createDriver () {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
