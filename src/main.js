import "./a.js";
// <script type='module'/>이라서 import로 가능
import collect from "collect.js";
// Vite가 node_modules에 설치된 library폴더의 path를 제공해서
// browser가 request할 수 있게 해주고, 최적화도 해준다
console.log(collect([1, 3, 3, 7]).avg());
