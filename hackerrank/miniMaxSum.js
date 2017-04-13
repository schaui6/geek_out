function miniMaxSum(array) {
    var max = 0;
    var min = array[0];
    var sum = 0;
    
    for (let i = 0, n = array.length; i < n; i++ ) {
        if (array[i] > max) {
            max = array[i];
        }
        else if (array[i] <= min ) {
            min = array[i];
        }
        sum+=parseInt(array[i]);
    }
    
    var maxSum = sum - min;
    var minSum = sum - max;
    
    return minSum + ' ' + maxSum;
    
} 

function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    
    var res = miniMaxSum(a_temp);
    console.log(res);

}