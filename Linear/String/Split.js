let str =  'Hello bhai kaise ho'
for(let i=0;i<str.length;){
     let word=''
     j=i;
     k=0
     while(str[j]!==' ' && j<str.length ){
         if(k==0){
            
            word+=str[k].toUpperCase()
            j++
         }
         else{
            word+=str[j]
            j++
         }
         k++;
     }
     i=j+1;
     console.log(word)
}
 