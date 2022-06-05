// The input comes as array of strings. Each element will contain data for a town and its population
//  in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.
// As output, you must print all the towns and their population.

function townPopulation(stringArray) {
  const registry = {};

  stringArray.forEach((element) => {
    let [townName, townPopulation] = element.split(" <-> ");
    if (townName in registry) {
      registry[townName] += Number(townPopulation);
    } else {
      registry[townName] = Number(townPopulation);
    }
  });
  for (let town in registry) {
    console.log(`${town} : ${registry[town]}`);
  }
}

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
