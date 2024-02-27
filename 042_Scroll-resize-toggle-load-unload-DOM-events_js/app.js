//* load, unload, resize, scroll, toggle


window.addEventListener("load" , function (){
    alert (" load item / data");
});


window.addEventListener("unload" , function (){
    console.log(" unload");
});


window.addEventListener("scroll" , function (){
    console.log(" scroll right way");
});


window.addEventListener("resize" , function (){
    console.log("i can get heigt and width ");

    let height = window.outerHeight;
    let width = window.outerWidth;

    console.log(`height ${height} , width ${width}`);
});



let details = document.querySelector("details");

details.addEventListener("toggle" , function (){
    alert(" thanks for toggle my details");
});

