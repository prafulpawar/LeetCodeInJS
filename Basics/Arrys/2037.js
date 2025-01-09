/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats = seats.sort(function (a, b) { return b - a })
    students = students.sort(function (a, b) { return b - a })
    let p = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i] > seats[i]) {
            let x = students[i] - seats[i]
            if (x > 0) {
                p += x
            }
        }
        else {
            let x =  seats[i] - students[i]
            if (x > 0) {
                p += x
            }
        }
    }
    return p;
};

let seats = [3,1,5]

let students = [2,7,4]
let x = minMovesToSeat(seats, students)
console.log(x)