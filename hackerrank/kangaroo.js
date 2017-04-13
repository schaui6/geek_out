function kangaroo(x1, v1, x2, v2) {
    if (x1 < x2 && v1 < v2) {
        return "NO";
    }
    else {
        if((v1!=v2) && ((x2-x1)%(v1-v2))==0) {
            return "YES";
        }
        else {
            return "NO";
        }
    }

    
    
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    var res = kangaroo(x1, v1, x2, v2);
    console.log(res);
}