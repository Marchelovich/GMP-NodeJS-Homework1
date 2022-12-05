function reverseString(str) {
    let newString = "";
    // skip the new line symbol
    for (let i = str.length - 2; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log('Enter your text:');
process.stdin.on('data', data => {
    let str = data.toString();
    console.log(reverseString(str));
});
