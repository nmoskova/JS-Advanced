// You will be given several towns, with products and their price. You need to find the lowest price
//  for every product and the town it is sold at for that price.
// The input comes as an array of strings. Each element will hold data about a town, product,
//  and its price at that town. The town and product will be strings, the price will be a number.
//   The input will come in the following format:
// {townName} | {productName} | {productPrice}
// As output, you must print each product with its lowest price and the town at which the product is sold at that price.
//  If two towns share the same lowest price, print the one that was entered first.
// The output, for every product, should be in the following format:
// {productName} -> {productLowestPrice} ({townName})
// The order of output in - order of entrance. See the examples for more info. {Product: {price: , town: }}

function lowestPrice(townsArray) {
  const products = {};
  for (let town of townsArray) {
    let [city, product, price] = town.split(" | ");
    price = Number(price);
    if (
      product in products == false ||
      (product in products && price < products[product].price)
    ) {
      products[product] = { price, city };
    }
  }
  for (const [key, value] of Object.entries(products)) {
    console.log(`${key} -> ${value.price} (${value.city})`);
  }
}

lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

lowestPrice([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
