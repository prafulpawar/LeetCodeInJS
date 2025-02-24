

var largestAltitude = function(gain) {
     let maxAltitude = 0;
     let currentAltitude = 0;
     
     for(let i=0;i<gain.length;i++){
          currentAltitude += gain[i];
          maxAltitude = Math.max(maxAltitude,currentAltitude);
     }
 return maxAltitude;
};
let gain =[-5,1,5,0,-7]

let x = largestAltitude(gain);
console.log(x)