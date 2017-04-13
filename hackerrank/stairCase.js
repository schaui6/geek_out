function stairCase(num) {
    var s = '';
    for(let i = 1, n = num; i <= n; i++) {
        s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    return s;
}

function main() {
    var n = parseInt(readLine());
    
    var res = stairCase(n);
    console.log(res);

}