const coffee = [
  {
    id: 1,
    name: "caffee latte",
    img: "./imgs/latte.jpg",
    price: 13,
    description:
      "A caffè latte consists of one or more shots of espresso, served in a glass into which hot steamed milk is added.",
  },
  {
    id: 2,
    name: "americano",
    img: "./imgs/americano.jpeg",
    price: 8,
    description:
      "The drink consists of a single shot of espresso mixed with added water. Typically about 120 millilitres.",
  },
];

const mojito = [
  {
    id: 3,
    name: "Classic Mojito",
    img: "./imgs/classic-mojito.webp",
    price: 14,
    description:
      "Mojitos are bubbly rum cocktails that taste minty-fresh, citrusy and a little sweet.",
  },
  {
    id: 4,
    name: "Cherry Mojito",
    img: "./imgs/watermelon-mojito.webp",
    price: 14,
    description:
      "The Cherry mojito is a spin on the Classic Mojito, a classic cocktail invented in Havana, Cuba.",
  },
];
const sweet = [
  {
    id: 5,
    name: "Cheesecake",
    img: "./imgs/classic-cheesecake.webp",
    price: 18,
    description:
      "Cheesecake is a dessert made with a soft fresh cheese (typically cottage cheese, cream cheese, quark or ricotta).",
  },
  {
    id: 6,
    name: "Brownies",
    img: "./imgs/brownies.webp",
    price: 15,
    description:
      "brownie, is a chocolate baked dessert bar. Brownies come in a variety of forms and may be either fudgy or cakey.",
  },
];
const bakery = [
  {
    id: 7,
    name: "Doughnuts",
    img: "./imgs/doughnuts.webp",
    price: 6,
    description:
      "Classic Glazed Doughnuts is a type of pastry made from leavened fried dough.",
  },
  {
    id: 8,
    name: "Bagel",
    img: "./imgs/Bagel.jpg",
    price: 14,
    description:
      "Bagels are traditionally made from yeasted wheat dough that is shaped by hand into a torus or ring, briefly boiled in water.",
  },
];

const coffeeMenu = coffee.map((el) => {
  return `<section>
            <div class="item">
                <img src=${el.img} alt="Caffee Latte">
                <div class="text-section">
                    <span>${el.name}</span>
                    <p>${el.price}<xml version="1.0" encoding="UTF-8">
                            <svg id="Layer_1" data-name="Layer 1" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39">
                                <path class="cls-1" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                                <path class="cls-1" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
                            </svg>
                    </p>
                    <hr>
                    <p>${el.description}</p>
                </div>
                </div>
            </section>
            `;
});
const mojitoMenu = mojito.map((el) => {
  return `<section>
              <div class="item">
                  <img src=${el.img} alt="Caffee Latte">
                  <div class="text-section">
                      <span>${el.name}</span>
                      <p>${el.price}<xml version="1.0" encoding="UTF-8">
                              <svg id="Layer_1" data-name="Layer 1" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39">
                                  <path class="cls-1" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                                  <path class="cls-1" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
                              </svg>
                      </p>
                      <hr>
                      <p>${el.description}</p>
                  </div>
                  </div>
              </section>
              `;
});
const sweetMenu = sweet.map((el) => {
  return `<section>
              <div class="item">
                  <img src=${el.img} alt="Caffee Latte">
                  <div class="text-section">
                      <span>${el.name}</span>
                      <p>${el.price}<xml version="1.0" encoding="UTF-8">
                              <svg id="Layer_1" data-name="Layer 1" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39">
                                  <path class="cls-1" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                                  <path class="cls-1" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
                              </svg>
                      </p>
                      <hr>
                      <p>${el.description}</p>
                  </div>
                  </div>
              </section>
              `;
});
const bakeryMenu = bakery.map((el) => {
  return `<section>
              <div class="item">
                  <img src=${el.img} alt="Caffee Latte">
                  <div class="text-section">
                      <span>${el.name}</span>
                      <p>${el.price}<xml version="1.0" encoding="UTF-8">
                              <svg id="Layer_1" data-name="Layer 1" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39">
                                  <path class="cls-1" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                                  <path class="cls-1" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
                              </svg>
                      </p>
                      <hr>
                      <p>${el.description}</p>
                  </div>
                  </div>
              </section>
              `;
});

addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").innerHTML = `
                                                        <section>${coffeeMenu}</section>
                                                        <section>${mojitoMenu}</section>
                                                        <section>${sweetMenu}</section>
                                                        <section>${bakeryMenu}</section>
                                                    `;
  document.querySelector(".all").onclick = () => {
    document.querySelector(".container").innerHTML = `
                                                        <section>${coffeeMenu}</section>
                                                        <section>${mojitoMenu}</section>
                                                        <section>${sweetMenu}</section>
                                                        <section>${bakeryMenu}</section>
                                                    `;
  };
  document.querySelector(".coffee").onclick = () => {
    document.querySelector(".container").innerHTML = coffeeMenu;
  };
  document.querySelector(".mojito").onclick = () => {
    document.querySelector(".container").innerHTML = mojitoMenu;
  };
  document.querySelector(".sweet").onclick = () => {
    document.querySelector(".container").innerHTML = sweetMenu;
  };
  document.querySelector(".bakery").onclick = () => {
    document.querySelector(".container").innerHTML = bakeryMenu;
  };
});
