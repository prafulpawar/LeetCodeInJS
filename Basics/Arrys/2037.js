/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats = seats.sort();
    students= students.sort();
    
    for(let i=0;i<students.length;i++) {
        let minDis =-855555555
        
        for(let j=0;j<seats.length;j++) {
            
        }

    }
};

let seats = [2,2,6,6]
let students = [1,3,2,6]
let x =minMovesToSeat(seats)
console.log(x)