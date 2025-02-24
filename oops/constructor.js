// now ab role me aayenga constructor
// class me ap define karo ya na karo but ek default constructor hota hai
// js me class ke naam se constructor nhi hota hai sirf vo constructor naam se hota hai
// now calling 
// this matlb ki current calling object
// objects ko hum instance bolte hai or uskei propertty methods ko hum behaviour bhi bol sakte hai
class Student{
     constructor(name,age){
        this.name = name;
        this.age  = age
        console.log("Running Constructor"+' '+ name+' '+age)
     }
     fun(){
        console.log("FUN HO RAHA HAI")
     }
}
const data  = new Student("ABCD",35);
const data1  = new Student("DSAX",75);
const data2 = new Student("QWER",75);
const data3  = new Student("MUCS",45);

// console.log(data,data1,data2,data3)
console.log(data.fun())
