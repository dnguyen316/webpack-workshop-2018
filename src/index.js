import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./assets/webpack-logo.jpeg";
// const imageUrl = import("./assets/webpack-logo.jpeg");
import "./button.css";
import "./footer.css";

const image = makeImage(imageUrl, 500);

console.log(image);

const button = makeButton("My New Button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);
