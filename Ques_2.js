// Find the mean, median, and mode in an array 

// mean 

let a=[1,2,3,4,5,10,5];


let sum=0;
let mean=0;
let count=0
for(i of a){
    sum+=i
    count+=1
}
mean=sum/count
console.log(`MEAN :-- ${mean}`)






// median
let median=0
if(count%2==0){
    let m=Math.floor(count/2)
    median=a[m-1]/a[m];
}
else{
    let m=Math.floor(count/2)
    median=a[m];
}

console.log(`MEDIAN :-- ${median}`);





// // mode
let mode='';
for (i of a){
    let c=0;
    for (j of a){
        if (j==i){
            c+=1
        }
    }
    if(c>1){
        if(!mode.includes(i)){
            mode+=i+" ";
        }
    }
}
console.log(`MODE :- ${mode}`);




