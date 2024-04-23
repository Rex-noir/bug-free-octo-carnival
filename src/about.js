import "./about.css";
import { createElement } from "./index";
import logoPicture from "./static/logo.svg";

export default function about() {
  //reset the container
  let container = document.querySelector("#content");
  container.innerHTML = "";

  //Create a new container
  let about_container = createElement("div", "about-container");

  let leftside_container = createElement("div", "left-container");
  let rightside_container = createElement("div", "right-container");

  //leftside
  let logoImage = createElement("img", "about-logo-image");
  logoImage.setAttribute("src", logoPicture);
  // Quickfacts
  let quickFactsContainer = createElement("div", "about-quick-facts-container");
  let factsBox = createElement("div", "factsbox");

  let leftTitle = createElement("h2", "quick-facts-title");
  leftTitle.textContent = "Quick Facts About The Restaurant";

  factsBox.innerHTML = `
  <table>
  <caption>Last Updated : 2058, July 54, 12am </caption>
  <thead>
  <tr>
  <th scope="row">Company</th>
  <td scope="col">Ace Restaurant Company Limited</td>
  </tr>
  <tr>
    <th scope="row">Founders</th>
    <td scope="col">RexNoir</td>
  </tr>
  <tr>
  <th scope="row">Co. Founders</th>
  <td scope="col">Rice, Fice, Mr.Nice</td>
  </tr>
  <tr>
    <th scope="row">No. of Employees</th>
    <td scope="col">2000</td>
  </tr>
  <tr>
    <th scope="row">C.E.O</th>
    <td scope="col">RexNoir</td>
  </tr>
  <tr>
    <th scope="row">No.of chefs</th>
    <td scope="col">6</td>
  </tr>
  </thead>
  </table>`;
  quickFactsContainer.appendChild(leftTitle);
  quickFactsContainer.appendChild(factsBox);
  //rightside
  let rightTitle = createElement("h2", "rightTitle");
  rightTitle.textContent = "About Us";
  let aboutText = createElement("p", "about-text");
  aboutText.textContent = `At Ace Restaurant, a love for good food and warm hospitality is the cornerstone of everything we do. 
  Established in 2012 by Amelia and Marco Rossi, Ace was born from a shared dream of creating a welcoming space where people could gather, celebrate, and indulge in the vibrant flavors of the Mediterranean.
  We believe in the power of food to connect us, and that's reflected in our philosophy of using fresh, seasonal ingredients sourced directly from local farms and producers.
  Our chefs, led by the talented Sophia Hernandez, are passionate about crafting dishes that are both innovative and deeply satisfying.
  They weave the culinary traditions of Italy, Spain, and Greece into a tapestry of tastes, offering a menu that caters to every palate.
  Whether you're yearning for a comforting bowl of Nonna's classic pasta pomodoro or seeking a more adventurous exploration with our pan-seared scallops on saffron risotto, Ace Restaurant promises an exciting culinary journey. 
  We take immense pride in the ambiance we've cultivated – a space that's both elegant and inviting, perfect for a romantic dinner, a lively gathering with friends, or a relaxing solo escape. 
  Our dedicated team, known for their attentiveness and genuine warmth, strives to provide exceptional service that anticipates your every need. 
  Every visit to Ace Restaurant is an opportunity to create lasting memories. 
  We invite you to step into our world of flavors, impeccable service, and genuine hospitality, and discover why Ace Restaurant has become a beloved institution in the neighborhood.`;

  //demo
  leftside_container.appendChild(logoImage);
  leftside_container.appendChild(quickFactsContainer);
  //
  rightside_container.appendChild(rightTitle);
  rightside_container.appendChild(aboutText);
  //append the container to the main container
  about_container.appendChild(leftside_container);
  about_container.appendChild(rightside_container);
  container.appendChild(about_container);
}
