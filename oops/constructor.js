// now ab role me aayenga constructor
// class me ap define karo ya na karo but ek default constructor hota hai
// js me class ke naam se constructor nhi hota hai sirf vo constructor naam se hota hai
// now calling 
// this matlb ki current calling object
class Student{
     constructor(name,age){
        this.name = name;
        this.age  = age
        console.log("Running Constructor",+' '+name+' '+age)
     }
}
const data  = new Student("ABCD",35);
const data1  = new Student("DSAX",75);
const data2 = new Student("QWER",75);
const data3  = new Student("ABCD",45);

console.log(data,data1,data2,data3)
