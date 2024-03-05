//* startsWith
//* endsWith
//* includes

//* startsWith

const message = `Today is tuesday , it's 3 march`;
let check = message.startsWith(`Today`);
console.log(check);

//* endsWith

let checkEnds = message.endsWith(`march`);
console.log(checkEnds);

//*! includes   ********

let checkIncludes = message.includes(` it's 3`);
console.log(checkIncludes);
