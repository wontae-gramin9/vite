import stylesA from "./assets/02a.module.css";
import stylesB from "./assets/02b.module.css";

console.log(stylesA);
console.log(stylesB);

document.querySelector(
  ".heading"
).className = `${stylesA.heading} ${stylesB.heading}`;
