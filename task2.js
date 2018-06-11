var n = process.argv[1];
var sq5 = Math.sqrt(5);
var a = (1 + sq5) / 2;
var b = (1 - sq5) / 2;
var result = (Math.pow(a, n) - Math.pow(b, n)) / sq5;
rocess.stdout.write(result);
