
const names = ["ah"," shobuj ",30," poddo "," 34 ",' 45 ',' 23 ',' 79 ',' 34 '];


for (let num = 0; num <9 ; num +=1 ) {
    document.write(names[num]);
}



//* jokpol with Array and loop 

const Name = new Array ();

for (let y = 0 ; y <5 ; y++){

    Name[y] = parseInt(prompt("Enter number"));

}

let add = 5; 

for (let z =0; z <5 ; z++) {

    add = add + Name[z];
    document.write(add);
}