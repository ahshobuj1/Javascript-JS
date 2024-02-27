//*! Keyboard - Object
//* 1. keydown
//* 2. keypress
//* 3. keyup
//* Note : some properties -> key, keyCode, code, shiftKey, ctlKey, repeat 


const textarea = document.querySelector("textarea");

/* textarea.addEventListener("keydown", function () {
    console.log('down key continue');
} )


textarea.addEventListener("keypress", function () {
    console.log('keypress continue');
} )
 */

textarea.addEventListener("keyup", function (e) {
    console.log(e.key);
} )