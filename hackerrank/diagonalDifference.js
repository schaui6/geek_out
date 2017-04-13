function matrix(num, array) {
    let x = 0;
    let y = 0;
    for(let i = 0, n = array.length; i < n; i++) {
        x += array[i][i];
        y += array[i][n-(i+1)];
    }
    return (x>y ? x-y : y-x);
    
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var res = matrix(n, a);
    console.log(res);

}
