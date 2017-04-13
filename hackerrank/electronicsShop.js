function maxSpent(budget, kb, pd) {
    
    let bal = budget;
    let spend = -1;
    
    let maxLen = kb.length;
    if (maxLen < pd.length) {
        maxLen = pd.length;
    }
    
    for (let i = 0, n = maxLen; i < n; i++){
        for (let j = 0, n = maxLen; j < n; j++){
            val = kb[i] + pd[j];
            
            if (val <= bal && val > spend) {
              spend =  val;     
            }      
        }
    }
    return spend;
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var n = parseInt(s_temp[1]);
    var m = parseInt(s_temp[2]);
    keyboards = readLine().split(' ');
    keyboards = keyboards.map(Number);
    pendrives = readLine().split(' ');
    pendrives = pendrives.map(Number);
    
    var res = maxSpent(s, keyboards, pendrives);
    console.log(res);

}
