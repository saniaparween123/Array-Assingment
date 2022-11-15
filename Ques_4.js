// Find duplicate elements in an array

let arr=[1,2,2,1,3,6,4,5,6];
let dub=" "
for(i of arr){
    c=0
    for(j of arr){
        if(j==i){
            c+=1;
        }
    }
    if(c>1){
        if(!dub.includes(i)){
            dub+=i+" "
        }
    }
}
console.log(dub);


