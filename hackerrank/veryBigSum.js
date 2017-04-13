function sumAll(array) {
    sum = 0;
    for(let i = 0, n = array.length; i < n; i++) {
        sum+=arr[i];
    }
    return sum;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var res = sumAll(arr);
    console.log(res);

}