let arr=[]
let k=1
for(let i =0 ;i<8;i++){
    for(let j=0;j<=i;j++){
        if(j===0){
             arr.push(1)
        }
        else if(j===i){
             arr.push(1)
        }
        else{

            arr.push(j)
            k++
        }
        
    }
    console.log(arr)
}
 