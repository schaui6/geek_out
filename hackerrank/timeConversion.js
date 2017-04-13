function convertTime(time) {
    var ampm = time.slice(-2);
    var t = time.slice(0,8);
    var tArr = t.split(':');
    var hour = parseInt(tArr[0]);
    
    if (ampm === 'PM') {
       if (hour === 12) {
           tArr[0] = '12';
       } 
       else {
           tArr[0] = hour + 12;
       }
    }

    if (ampm === 'AM') {
        if (hour === 12) {
           tArr[0] = '00';
       } 
    }

    return tArr.join(':');
}

// function main() {
//     var time = readLine();
    
//     var res = convertTime(time);
//     console.log(res);

// }

console.log(convertTime('12:00:00PM'));
console.log(convertTime('12:00:00AM'));
console.log(convertTime('11:00:00PM'));
console.log(convertTime('11:00:00AM'));