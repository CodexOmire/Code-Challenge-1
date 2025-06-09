// Boda Boda Fare Estimator
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const rideCost = distanceInKm * chargePerKm;
  const totalFare = baseFare + rideCost;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${rideCost}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distance = Number(input);
calculateBodaFare(distance);
