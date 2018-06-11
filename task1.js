var removeChar = process.argv[2].replace(/[^A-Z0-9]/ig, "").toLowerCase();
var checkPalindrome = removeChar.split('').reverse().join('');
process.stdout.write(removeChar === checkPalindrome);
