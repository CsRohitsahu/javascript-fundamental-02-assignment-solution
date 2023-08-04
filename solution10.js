function wordCounter(sentence){
    //creating empty map for storing words and count
    let wordMap=new Map();
    //spliting sentence into array of words
    let words=sentence.split(" ")
    //loop for words array
    words.forEach(element => {
        //checking whether word is in map already
        if(wordMap.has(element)){
            wordMap.set(element,wordMap.get(element)+1)

        }
        else wordMap.set(element,1)
        
    });
    return wordMap;

}
const sentence="please please submit your assignment on time,your assignment are important";
const result=wordCounter(sentence)
console.log(result);