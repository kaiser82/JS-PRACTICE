function reverseString(text) {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverse = reverse + text[i];
        console.log(text[i], reverse);
    }
}

const myString = 'I am a good boy';

reverseString(myString);