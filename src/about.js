import "./about.css";
import { createElement } from "./index";

export default function about() {
  //reset the container
  let container = document.querySelector("#content");
  container.innerHTML = "";

  let about_container = createElement("div", "about-container");
  about_container.textContent = "HEll";
  let span = createElement("span", "span");
  span.textContent = "HELLLOO";
  about_container.appendChild(span);
  container.appendChild(span);
}
