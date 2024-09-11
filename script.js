let word=prompt('enter any word:  ')
firstWord=word[0]
lowerCase=firstWord.toLocaleLowerCase();



switch(true){
case lowerCase==='a'||lowerCase=== 'e'||lowerCase==='i'||lowerCase==='o'||lowerCase==='u':
    console.log(`სიტყვა > ${word} < იწყება ხმოვნით, რომელიც არის > ${firstWord} <`);
    break;
default:
    console.log(`სიტყვა > ${word} < იწყება თანხმოვნით, რომელიც არის > ${firstWord} <`)
    break;
}
