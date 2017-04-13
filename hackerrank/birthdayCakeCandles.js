function numOfTallestCandles(h) {
    let tallest = 0;
    let count = 0;
    h.forEach(function(val){
        if (val > tallest) {
            tallest = val;
        }
    });
    h.forEach(function(val){
        if (val === tallest) {
            count++;
        }
    });
    
    return count;
}

function main() {
    var n = parseInt(readLine());
    height = readLine().split(' ');
    height = height.map(Number);
    
    var res = numOfTallestCandles(height);
    console.log(res);

}