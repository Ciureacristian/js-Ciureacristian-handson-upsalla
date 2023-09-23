var cart = {
  name: 'Cristi',
  surname: 'Ciurea',
  email: 'ciureacristiann@yahoo.com',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 100,
    },
    {
      category: 'PC and Laptop',
      name: 'Keybord Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and Laptop',
      name: 'Keybord',
      price: 400,
      quantity: 1,
      weight: 280,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture Frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(`Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”
`);
var totalProducts = 0;
cart.products.forEach(function (products) {
  totalProducts++;
});
console.log(
  `${cart.name} ${cart.surname} are ${totalProducts} tipuri de produse in cart.`,
);

console.warn(`Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”
`);
var productNames = [];

cart.products.forEach(function (product) {
  productNames.push(product.name);
});

var productList = productNames.join(', ');
var lastIndex = productList.lastIndexOf(',');

productList =
  productList.substring(0, lastIndex) +
  ' si' +
  productList.substring(lastIndex + 1);

console.log(`${cart.name} are urmatoarele produse in cart: ${productList}.`);

console.warn(`Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”
`);
var totalWeight = 0;
cart.products.forEach(function (product) {
  totalWeight += product.weight * product.quantity;
});

console.log(
  `Greutatea totala a cartului lui ${cart.name} este ${totalWeight}.`,
);

console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”
`);
var totalProduct = 0;
cart.products.forEach(function (product) {
  totalProduct += product.quantity;
});
console.log(`${cart.name} isi cumpara un total de ${totalProduct} produse.`);

console.warn(`Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”
`);
var totalProductMobile = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile')
    totalProductMobile += product.price * product.quantity;
});
console.log(
  `Cartul contine produse din categoria Mobile in valoare totala de ${totalProductMobile}.`,
);

console.warn(
  `Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”`,
);
var totalWeightMobile = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile')
    totalWeightMobile += product.weight * product.quantity;
});
console.log(
  `Greutatea totala a produselor din categoria Mobile este ${totalWeightMobile}.`,
);

console.warn(`Afiseaza propozitia “Valoarea totala a cartului lui Cristi este xxx.”
`);
var totalPrice = 0;
cart.products.forEach(function (product) {
  totalPrice += product.price * product.quantity;
});
console.log(`Valoarea totala a cartului lui Cristi este ${totalPrice}.`);

console.warn(`Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”
`);
var totalProductPrice = 0;

cart.products.forEach(function (product) {
  totalProductPrice += product.price;
});

console.log(`Totalul pretului per produs din cart este ${totalProductPrice}.`);

console.warn(`Defineste o variabila numita maximumBudget de tip number
 cu o valoare arbitrara pozitiva.
Afiseaza propozitia: “Nume prenume isi permite
| nu isi permite cartul.” In functie de
`);
var maximumBudget = 1500;

var totalCartCost = 0;

cart.products.forEach(function (product) {
  totalCartCost += product.price * product.quantity;
});

if (maximumBudget >= totalCartCost) {
  console.log(`${cart.name} ${cart.surname} isi permite cartul.`);
} else {
  console.log(`${cart.name} ${cart.surname} nu isi permite cartul.`);
}

console.warn(`Defineste o variabila numita maximumWeight de tip number
 cu o valoare arbitrara pozitiva.
Afiseaza propozitia “Firma de curierat poate
| nu poate livra comanda.” In functie de greutatea totala a produselor din cart.
`);

var maximumWeight = 1000;

var totalWeight = 0;
cart.products.forEach(function (product) {
  totalWeight += product.weight * product.quantity;
});

if (maximumWeight >= totalWeight) {
  console.log(`Firma de curierat poate livra comamda.`);
} else {
  console.log(`Firma de curierat nu poate livra comanda.`);
}
