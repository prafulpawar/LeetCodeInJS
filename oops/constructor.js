// now ab role me aayenga constructor
// class me ap define karo ya na karo but ek default constructor hota hai
// js me class ke naam se constructor nhi hota hai sirf vo constructor naam se hota hai
// now calling 
class Student{
     constructor(name,age){
        console.log(name,age)
        console.log("Running Constructor")
     }
}
const data  = new Student("ABCD",25);


console.log(data)
