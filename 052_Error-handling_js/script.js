//? Error-Handling -> try, catch, finally, throw 

// console.log("hello");
// console.log(y);  //! error
// console.log("bye");



try{

    console.log("hello");
    console.log(y);

}catch(errorHere){

    console.log(errorHere);
    //console.log(errorHere.name);
    //console.log("There is a error here! ");

}finally{

    console.log("bye");
    console.log("error! but still it will run");

};



//* program with -> throw 

document.querySelector("#myButton").addEventListener('click', function(){

    let input = document.querySelector("#myInput").value;

    try{
    
        if(input < 50){
        
            throw " Please enter number up 50 " ;
        
        }else if(input > 100){
        
            throw "please enter number under 100";
        
        }else{
        
            console.log(input);
        
        };
    
    }catch(err){
    
        console.log(err);
    
    };

});
