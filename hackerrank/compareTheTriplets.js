function compareTriplets(arrA, arrB) {
    
    let alice = 0;
    let bob = 0;

    for(let i = 0, n = arrA.length; i < n; i++) {
        if (parseInt(arrA[i]) > parseInt(arrB[i])) {
            alice++;
        }
        else if (parseInt(arrA[i]) < parseInt(arrB[i])) {
            bob++;
        }
    }
    return alice + ' ' + bob;
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    // Write Your Code Here
    
    var res = compareTriplets(a0_temp, b0_temp);
    console.log(res);

}
