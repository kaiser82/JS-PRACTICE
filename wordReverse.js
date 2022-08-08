function reverseWord(str) {
    const words = str.split(' ');
    console.log(words);
    reverse = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reverse.push(words[i]);
    }
    console.log(reverse.join(' '));
}


const myString = 'I am a good boy';

reverseWord(myString);