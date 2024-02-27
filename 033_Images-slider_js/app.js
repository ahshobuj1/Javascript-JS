
const photos = ["./images/shobuj-modified.png" , "./images/flower-modified.png" , "./images/ah.jpg" , "./images/shobuj.jpg" , "./images/IMG_20230919_141534 (1).jpg"];


let dynamicIndex = 0;

let imgTag = document.querySelector("img");



function next () {
    dynamicIndex++ ;

    if (photos.length <= dynamicIndex) {
        dynamicIndex = 0 ;
    }
    imgTag.src = photos[dynamicIndex];

}


function prev () {
    dynamicIndex-- ;

    if (dynamicIndex < 0 ) {
        dynamicIndex = photos.length - 1 ;
    }
    imgTag.src = photos[dynamicIndex];

}









//! Advance way
/* function next () {
    
    dynamicIndex++ ;
    
    if (photos.length <= dynamicIndex) {
        
        dynamicIndex = 0 ;
        imgTag.src = photos[dynamicIndex];
        
    } else {
        imgTag.src = photos[dynamicIndex];
    }
    
}


function prev () {

    dynamicIndex-- ;

    if (dynamicIndex < 0 ) {
    
        dynamicIndex = photos.length - 1 ;
        imgTag.src = photos[dynamicIndex];
    
    }    
    else {
    
        imgTag.src = photos[dynamicIndex];
    
    }    

}    
 */





//! first try 
/* function next () {
    imgTag.src = photos[dynamicIndex];
    dynamicIndex++;

    if (dynamicIndex >=5){
    
        dynamicIndex = 0;
    
    }
}


function prev () {

    imgTag.src = photos[dynamicIndex];
    dynamicIndex--;

    if (dynamicIndex <= 0) {
    
        dynamicIndex = 4;
    
    }
} */