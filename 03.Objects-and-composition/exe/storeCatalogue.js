// You have to create a sorted catalog of store products. You will be given the products’ names and prices.
//  You need to order them in alphabetical order.
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
//  There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above.
//  The products must be divided into groups, by the initial of their name. The group's initial should be printed,
//   and after that, the products should be printed with 2 spaces before their names. For more info check the examples.
function storeCatalogue(arrOfStrings) {
  const store = {};
  for (let p of arrOfStrings) {
    let [product, price] = p.split(" : ");
    price = Number(price);
    let result = { name: product, cost: price };
    let firstLetter = product[0];
    if (firstLetter in store) {
      store[firstLetter].push(result);
    } else {
      store[firstLetter] = [result];
    }
  }
  const sortedStore = Object.keys(store).sort().reduce((res, key) => (res[key] = store[key], res), {})

  for (const [key, value] of Object.entries(sortedStore)) {
    console.log(key);
    value.sort((a, b) => a.name.localeCompare(b.name));
    for (v of value) {
      console.log(`  ${v.name}: ${v.cost}`);
    }
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
