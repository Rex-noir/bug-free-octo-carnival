import about from "./about";
import "./style.css";
import acelogo from "./static/logo.svg";
import tableImg from "./static/hitesh-dewasi-5JwBbnyZzfc-unsplash.jpg";

//importing static imgs
const images = {};
function importAll(r, obj) {
  r.keys().forEach((key) => (obj[key] = r(key)));
}
importAll(
  require.context("./static/dishes", false, /\.(png|jpe?g|svg)$/),
  images
);
const chefs_pics = {};
importAll(
  require.context("./static/chefs", false, /\.(png|jpe?g|svg)$/),
  chefs_pics
);
const social_icons = {};
importAll(
  require.context("./static/icons/", false, /\.(png|jpe?g|svg)$/),
  social_icons
);
const restaurantPics = {};
importAll(
  require.context("./static/restaurantpics", false, /\.(png|jpe?g|svg)$/),
  restaurantPics
);
//
let buttons = document.querySelectorAll("nav button");
for (let button of buttons) {
  button.addEventListener("click", tabListener);
}

let logo = document.querySelector("img[alt='logo']");
logo.setAttribute("src", acelogo);
home();
function removeOldItems(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
let homeButton = document.querySelector("#home");
homeButton.classList.add("selected-button");

//click listening callback
function tabListener(e) {
  let element = e.target;
  document
    .querySelectorAll("nav button")
    .forEach((button) => button.classList.remove("selected-button"));

  switch (element.id) {
    case "about":
      element.classList.add("selected-button");
      about();
      break;
    case "home":
      home();
      element.classList.add("selected-button");
      break;
    case "menu":
      element.classList.add("selected-button");
      break;
    default:
      console.log("Something's wrong!");
  }
}
function home() {
  let container = document.querySelector("#content");
  removeOldItems(container);

  let dishes = 6;
  let dish_names = [
    "Aaluu",
    "Daal",
    "ShweLi",
    "Fried Rice",
    "MacBook",
    "Adroid",
  ];
  let chefs = 5;
  let chef_names = ["Daniel", "Angel", "Gelo", "Sell", "Soldout"];

  let social_media_icons = ["facebook.svg", "instagram.svg", "reddit.svg"];
  let container_manifesto = createElement("div", "container-manifesto");

  let manifesto = createElement("span", "manifest-text");
  manifesto.textContent =
    "The Award winning restaurant is now available online!";
  container_manifesto.appendChild(manifesto);

  let containerBody = createElement("div", "container-main");
  let divsion_main = createElement("div", "division-main");

  let image = createElement("img", "main-picture");
  let imageIndex = 0;

  image.setAttribute("src", restaurantPics[["./table-5356682.jpg"]]);

  function changeImage() {
    const imagePath =
      imageIndex === 0
        ? restaurantPics["./table-5356682.jpg"]
        : restaurantPics["./restaurant-inside.jpg"];
    image.setAttribute("src", imagePath);

    imageIndex = (imageIndex + 1) % Object.keys(restaurantPics).length;
  }
  setInterval(() => changeImage(), 3000);

  let side_text_container = createElement("div", "side-text-container");
  let side_text_upper_container = createElement("div", "side-text-upper");
  let side_text_lower_container = createElement("div", "side-text-lower");

  let upper_text = createElement("p", "upper-text");
  upper_text.textContent = "Escape the ordinary, savor the extraordinary.";

  side_text_upper_container.appendChild(upper_text);

  let lower_title = createElement("h3", "lower-title");
  lower_title.textContent = "Reserve a table!";

  let table_image = createElement("img", "table-image");
  let lower_text = createElement("p", "lower-text");
  let reserve_button = createElement("button", "reserve");

  table_image.setAttribute("src", tableImg);
  reserve_button.textContent = "Reserve!";
  lower_text.textContent = `Reserving for a table is easier than ever since the website is available.
  \n Do you know that if you reserve more than 2 tables, you will get free bottles of wine per tables?`;

  side_text_lower_container.appendChild(lower_title);
  side_text_lower_container.appendChild(table_image);
  side_text_lower_container.appendChild(lower_text);
  side_text_lower_container.appendChild(reserve_button);

  side_text_container.appendChild(side_text_upper_container);
  side_text_container.appendChild(side_text_lower_container);

  divsion_main.appendChild(image);
  divsion_main.appendChild(side_text_container);

  containerBody.appendChild(divsion_main);

  //list
  let listContainer = createElement("div", "list-container");
  let listTitle = createElement("span", "list-title");

  listTitle.textContent = "Popular Dishes";
  containerBody.appendChild(listTitle);

  for (let i = 0; i < dishes; i++) {
    let items = createElement("div", "item-div");
    let dish_pic = createElement("img", "dish-pic");
    dish_pic.setAttribute("src", images[`./dish${i}.jpg`]);

    let dish_name = createElement("span", "dish-name");
    dish_name.textContent = dish_names[i];

    items.appendChild(dish_pic);
    items.appendChild(dish_name);
    listContainer.appendChild(items);
  }
  containerBody.appendChild(listContainer);

  //chefs

  let chef_container = createElement("div", "chef-container");
  let chef_container_title = createElement("div", "chef-container-title");
  chef_container_title.textContent = "Chefs";
  chef_container.appendChild(chef_container_title);

  for (let i = 0; i < chefs; i++) {
    let chef_card = createElement("div", "chef-card");
    let chef = createElement("img", "chef-pics");
    chef.setAttribute("src", chefs_pics[`./chef${i}.jpg`]);

    let chef_name = createElement("span", "chef-name");
    chef_name.textContent = chef_names[i];

    chef_card.appendChild(chef);
    chef_card.appendChild(chef_name);
    chef_container.appendChild(chef_card);
  }

  containerBody.appendChild(chef_container_title);
  containerBody.appendChild(chef_container);

  //footer
  let footer_container = createElement("div", "footer-container");
  let social_address_wrapper = createElement("div", "social-address-wrapper");

  let social_title = createElement("h3", "social-title");
  social_title.textContent = "For more updates, follow us on: ";

  let social_media_container = createElement("div", "social-container");
  social_media_container.appendChild(social_title);

  let social_icons_container = createElement("div", "social-icon-container");
  social_media_icons.forEach((iconseach) => {
    let icon = createElement("img", "social-media-icon");
    icon.setAttribute("src", social_icons[`./${iconseach}`]);
    social_icons_container.appendChild(icon);
  });
  social_media_container.appendChild(social_icons_container);
  //=================================
  let address_container = createElement("div", "address-container");
  let physical_address = createElement("div", "physical-address");
  physical_address.innerHTML = `
  <h3>Physical Address: </h3><address>
  124 Main Street <br>
  Fiftyville, StateVille 66666 <br>
  United States 
  </address>`;

  let contact_address = createElement("div", "contact-address");
  contact_address.innerHTML = `<h3>Contact addresses: </h3>
  <address>
  Email:<a href="mailto:restaurant@ace.org">restaurant@ace.org</a><br>
  Phone:<a href="tel:9806969666">9806969666</a><br>
  FAQ : <a href="https://faq.acerestaurant.com">faq.acerestaurant.com</a>
  </address>`;
  address_container.appendChild(physical_address);
  address_container.appendChild(contact_address);
  //=============================
  social_address_wrapper.appendChild(social_media_container);
  social_address_wrapper.appendChild(address_container);

  let foot_text_container = createElement("div", "foot-text-container");
  foot_text_container.innerHTML =
    "&copy; 2024 &nbsp;<strong>Ace Restaurant</strong>. All rights reserved";

  social_address_wrapper.appendChild(foot_text_container);
  footer_container.appendChild(social_address_wrapper);

  container.appendChild(container_manifesto);
  container.appendChild(containerBody);
  container.appendChild(footer_container);
}

function createElement(tag, className, id) {
  let element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (id) element.id = id;
  return element;
}

export { createElement };
