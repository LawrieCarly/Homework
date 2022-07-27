const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => journey.startLocation);
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => journey.endLocation);
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport == transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function (){
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)
}

// Traveller.prototype.getUniqueModesOfTransport = function (){
//   const transMethods = this.journeys.map((journey) => {journey.transport})
//   return transMethods
//     const result = this.transMethods.filter(transMethod.indexOf(transMethod));
//   return result
// };




Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => journey.transport)
  .filter((transport, i, transports) => i == transports.indexOf(transport));
  return result
};

module.exports = Traveller;