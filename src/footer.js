import { red, blue } from "./button-styles";

const top = document.createElement("div");
top.innerHTML = "Top of Footer";
top.style = red;

const bottom = document.createElement("div");
bottom.innerHTML = "Bottom of Footer";
bottom.style = blue;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { footer };
