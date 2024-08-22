import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
const loadImage = () => import("./assets/webpack-logo.jpeg");
import "./button.css";
import "./footer.css";

const button = makeButton("My New Button");

button.addEventListener("click", () => {
  loadImage().then((module) => {
    const image = makeImage(module.default, 500);
    document.body.appendChild(image);
  });
});

button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
