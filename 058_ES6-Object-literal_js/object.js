//* Object literals

function text(name,age){
    return  {
        name,       //name = name,
        age         //age = age
    }
}  

console.log(text("shobuj", 22));




// * function inside object - object literals

let ob = {
    body(m,n){
        return {
            m,      // m=m,
            n       // n=n
        }
    }
}
console.log(ob.body("M means Mango ",20));





//! function name with space

let ob1 = {
    'body name'(m,n){
        return {
            m,
            n
        }
    }
}
let arr = [23,7]
console.log(ob1['body name'](...arr));






//* this is normal code 
/* 
let ob = {
    
    body : function(m,n){
        
        return {
            m,
            n
        }
    }
}

console.log(ob.body("m means mango ",20)); */