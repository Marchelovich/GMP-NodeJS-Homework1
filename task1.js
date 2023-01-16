function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

process.stdin.on('data', chunk => {
    const str = chunk.toString().trimEnd();
    console.log(reverseString(str));
});
