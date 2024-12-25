import { heading as headisngFontSize } from "./assets/02a.module.css";
import { heading as headingColor } from "./assets/02b.module.css";

console.log(stylesA);
console.log(stylesB);

document.querySelector(
  ".heading"
).className = `${headisngFontSize} ${headingColor}`;
