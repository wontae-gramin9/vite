import "./a.js";
import styles from "./assets/style.css?inline";

console.log("styles:", styles);
const styleEl = document.createElement("style");
styleEl.innerText = styles;
document.querySelector("head").append(styleEl);
