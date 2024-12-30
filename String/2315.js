/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let nons=0
   
     for(let start = 0; start < s.length; start++ ) {
           
           if(s[start] ==='|'){
               
               let end=start+1
              
               while(end < s.length && s.charAt(end) !=='|'){
                   end++;
               }
               start =end
           }
           else{
               if(s[start]=='*'){
                   nons++     
               }
           }
          
       }
     return nons
};