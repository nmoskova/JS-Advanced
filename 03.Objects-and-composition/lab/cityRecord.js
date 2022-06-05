// You will receive a city’s name (string), population (number), and treasury (number) as arguments,
//  which you will need to set as properties of an object and return it.

function cityRecord(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
  };
  return city;
}

console.log(cityRecord("Tortuga", 7000, 15000));
