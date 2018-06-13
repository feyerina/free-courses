/*
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
*/

var l = process.argv.length-2;
var getStr = process.argv[2];
var i = 2;
while(l > 1){
  i++;
var str = process.argv[i];
getStr = getStr + str;
l--;
}

function strDel(n){
  var s='';
  var a=n.match(/[aeiouy]/ig);
  var b=n.match(/[bcdfghjklmnpqrstvwxz]/ig);
  var c=n.match(/[0123456789]/ig);
  if(a!==null){
  for (var i=0;i<a.length;i++)
  s+=a[i];
  s+=' ';
  }

  if(b!==null){
  for(var i=0;i<b.length;i++)
  s+=b[i];
  }
  s+=' ';
  if(c!==null){
  for(var i=0;i<c.length;i++)
    s+=c[i];
  }
  
    return s;
}


process.stdout.write(strDel(getStr));
