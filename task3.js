var str = process.argv[2];
var arr=[];
var regExps={
    vowels: /[AEIOU]/gi,
    consonants: /[BCDFGHJKLMNPQRSTVWXYZ]/gi,
    digits: /\d/g
}
for(key in regExps){
   (str.match(regExps[key]))?arr.push(str.match(regExps[key]).join("")):"";
}
process.stdout.write(arr.join(" "));
