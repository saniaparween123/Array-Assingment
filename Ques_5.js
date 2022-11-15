// Merge two sorted arrays into a single sorted array 



let arr=[2,1,4,3,6,5];
let arr1=[9,7,8,10];
for(i of arr){
    arr1.push(i)
}
let sort=arr1.sort((a,b)=>a-b);
console.log(sort);