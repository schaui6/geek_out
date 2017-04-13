function solve(grades){
    // Complete this function
    var ans = [];
    var newGrades = grades.map(function(val){
        if(val > 37) {
            if ((val + 2) % 5 === 0) {
                ans.push(val + 2);
            }
            else if ((val + 1) % 5 === 0) {
                ans.push(val + 1);
            }
            else {
                ans.push(val);
            }
        }
        else {
           ans.push(val); 
        }
    });
    return ans.join('\n');
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    process.stdout.write(""+result+"\n");

}
