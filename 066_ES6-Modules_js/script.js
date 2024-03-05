//* module -> export | import

import { text, message2, text3 as data, setText } from "./modules.js";

console.log(text);

console.log(message2);

console.log(data);

setText(`The number 01 value changed by setText function successfully`);

console.log(text);
