function fruitLandings(house, trees, numOfFruits, ap, org) {
    var applesLanded = 0;
    var orangesLanded = 0;
    var apples = ap.map(function(val){
        var apple = parseInt(trees[0]) + parseInt(val)
        if ( apple >= house[0] && apple <= house[1] ) {
           applesLanded++;
       }
    });
    
    var oranges = org.map(function(val){
    var orange = parseInt(trees[1]) + parseInt(val)
    if ( orange >= house[0] && orange <= house[1] ) {
           orangesLanded++;
       }
    });
    return applesLanded + '\n' + orangesLanded;
    
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    
    var res = fruitLandings(s_temp, a_temp, m_temp, apple, orange );
    console.log(res);

}
