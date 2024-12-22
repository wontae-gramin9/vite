import "./a.js";
import collect from "collect.js";
import styles from "./assets/style.css?inline";

console.log("styles:", styles);
console.log(collect([1, 3, 3, 7]).avg());
