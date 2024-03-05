export let text = "This is num 01 from modules";

let text2 = `this is from text two`;
export { text2 as message2 };

export let text3 = `this is from data three`;

export const setText = (txt) => (text = txt);
