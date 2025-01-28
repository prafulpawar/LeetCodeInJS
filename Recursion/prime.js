// const num = 7;
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false; 
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break; 
//     }
//   }
// }

// if (isPrime) {
//   console.log(`${num} is a prime number.`);
// } 
// else{
//     console.log(`${num} is not prime number.`);
// }

// let n = Number(prompt('Enter A Value'))
// isPrime(n)


function isPrime (n){
      if(n<=1)    return false
      if(n===2)   return true
      if(n%2===0) return false

      for(let i=3;i<=Math.floor(Math.sqrt(n));i=i+2){
           if(n%i==0) return false  
      }  
      return true;
}

let x  = isPrime(11);
console.log(x)