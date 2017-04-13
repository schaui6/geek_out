function plusMinus(num, array) {
    var negatives = 0;
    var positives = 0;
    var zeros = 0;
    
    for(let i = 0, n = array.length; i < n; i++) {
        if (arr[i] === 0) {
            zeros+=1;
        }
        else if (arr[i] > 0) {
            positives+=1;
        }
        else if (arr[i] < 0) {
            negatives+=1;
        }
    }

    return positives/num + '\n' + negatives/num + '\n' + zeros/num; 
    
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var res = plusMinus(n, arr);
    console.log(res);

}