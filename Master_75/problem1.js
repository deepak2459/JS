//  two pointer problem 

// let nums = [0,1,2,2,3,3,3,3,4,4,5]  

// let k = 0;

// for(let i = 0; i<nums.length;i++){
    
// } 

let nums = [0,0,0,1,2,2,2,3,3,4,5,5,5,5,5,6,7,8,9,9,9] 

// let j =1;
//  for (let i = 0; i < nums.length; i++) {
//     if(nums[i]==nums[j]){
//         let result = nums.indexOf(nums[j])
//         nums.splice(result,1)
//         i--
//         continue

//     }
//     j++
    
//  } 

 
 
//  let k = nums.length;
//   console.log(nums,`length of array ${k}`); 


let k = 1;

for(let  i = 1; i<nums.length;i++){
   if(nums[i] !== nums[k-1]){
      nums[k] = nums[i]
      k++
   }
} 
console.log(nums);

return k
 

