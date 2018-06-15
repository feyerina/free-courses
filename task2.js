function fibonachi(n) {
    var a = 0;
    var b = 1;
    var flag = false;
    if (n < 0){
        n *= -1;
        flag = true;
    }    
    if (n == 0) {
       return n;
    }
    for (var i = 2; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }

    if (flag) {
        if (n % 2 == 0) {
            return -b;
        }
    }
    return b;
  }
  


var str = process.argv[2];
var n = parseInt(str);
process.stdout.write(fibonachi(n) + "");
