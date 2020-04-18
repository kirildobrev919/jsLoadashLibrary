const _ = {
  clamp (number, lower, upper) {
    var lowerClampedValue  = Math.max(number, lower);
    var result  = Math.min(lowerClampedValue, upper);
    return result;
  },
  inRange (number, start, end) {
    if(end === undefined){
      end = start;
      start = 0;
    }
    if(start > end){
      let temp =start;
      start = end;
      end = temp;
    }
    if(number >= start && number < end){
      return true;
    }
    return false;
  },
  words (text) {
    let wordsArr = text.split(' ');
    return wordsArr;
  },
  pad (txt, len) {
    if(txt.length > len){
      return txt;
    }
    const front = Math.floor((len - txt.length) / 2);
    const end = len - txt.length - front;
    const padd = ' ';
    const result = padd.repeat(front) + txt + padd.repeat(end);
    return result;
  },
  has (obj, key) {
    var result = obj[key];
    if(result== undefined){
      return false;
    }else{
      return true;
    }
  },
  invert (obj) {
   let invertedObject = {};
   for (let key in obj){
     const originalValue = obj[key];
     invertedObject = {originalValue:key};
   }
    return invertedObject;
  },
  findKey (obj, predicate) {
    for (let key in obj){
      let theValue = obj[key];
      let result = predicate(theValue);
      if(result){
        return key;
      }
    }
    return undefined;
  },
  drop (arr, count) {
    if(count==0 || count== undefined){
      count=1;
    }
    let newArr = arr.slice(count);
    return newArr;
  },
  dropWhile (arr, predicate) {
    let cb = (element, index)=>{
      return !predicate(element,index,arr);
    };
    let dropIndex = arr.findIndex(cb);
    let droppedArray = this.drop(arr, dropIndex);
    return droppedArray;
  },
  chunk (arr, size=1) {
    let arrChunks = [];
    for(let i = 0; i<arr.length; i+=size){
      let arrChunk = arr.slice(i, i+size);
      arrChunks.push(arrChunk);
    }
    return arrChunks;
  }
}

// Do not write or modify code below this line.
module.exports = _;