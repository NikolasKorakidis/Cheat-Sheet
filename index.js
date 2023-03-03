// These are the recommended products. You dont need all of details from the product, just the ones are in the design
const recommendedProducts = [
  {
    name: "Etos wattenschijfjes 140 stuks",
    id: "120525856",
    price: 0.69,
    brand: "Etos",
    category: "Beauty/Make-up/Make-upreiniging/Wattenschijfjes",
    dimension6: 2,
    dimension14: "",
    dimension15: "",
    dimension19: "product",
    dimension20:
      "2e zelfde product halve prijs voor Etos extra leden | 2e zelfde product halve prijs voor Etos extra leden",
    dimension41: "0",
    list: "product-slider-overlay-anderen-kochten-ook-product-to-product-alsobought-pdp-atc",
    position: 2,
    dimension39: "0",
  },
  {
    name: "Etos wattenschijfjes 4 x 140 stuks",
    id: "120525792",
    price: 2.49,
    brand: "Etos",
    category: "Beauty/Make-up/Make-upreiniging/Wattenschijfjes",
    dimension6: 2,
    dimension14: "",
    dimension15: "",
    dimension19: "product",
    dimension20:
      "2e zelfde product halve prijs voor Etos extra leden | 2e zelfde product halve prijs voor Etos extra leden",
    dimension41: "0",
    list: "product-slider-overlay-anderen-kochten-ook-product-to-product-alsobought-pdp-atc",
    position: 1,
    dimension39: "0",
  },
  {
    name: "Etos Maxi Wattenschijfjes 50 stuks",
    id: "111183364",
    price: 0.95,
    brand: "Etos",
    category: "Beauty/Make-up/Make-upreiniging/Wattenschijfjes",
    dimension6: 2,
    dimension14: "",
    dimension15: "",
    dimension19: "product",
    dimension20:
      "2e zelfde product halve prijs voor Etos extra leden | 2e zelfde product halve prijs voor Etos extra leden",
    dimension41: "0",
    list: "product-slider-overlay-anderen-kochten-ook-product-to-product-alsobought-pdp-atc",
    position: 3,
    dimension39: "0",
  },
];

// This is the POST request you will use to add a product to cart.

// This is the unique Token for the request you dont have to do anything with it! Neither with the URL
const tokenCSRF = document.querySelector("#csrf_token").getAttribute("value");
const url =
  "https://www.etos.nl/on/demandware.store/Sites-etos-nl-Site/nl_NL/Cart-AddProduct";

// This is an example product ID, if you copy paste the function in your Chrome Dev tools console you can see that is working and adding and element to the cart.
// You can test it in the cart page and after you get a response reload the page to see it there!
const productID = "120063938";
const quantity = 1;

fetch(url, {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body:
    "csrf_token=" +
    tokenCSRF +
    "&extendWithItemsHTML=false&pid=" +
    productID +
    "&pidsObj&quantity=" +
    quantity,
})
  .then((res) => res.json())
  .then((response) => console.log(response));

//   Have fun and good luck! <3
