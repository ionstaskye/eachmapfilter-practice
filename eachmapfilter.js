const doubleValues = function(arr)  {
    let doubledArray = []
    arr.forEach(function(num)  {
        doubledArray.push(num*2)
    })
    return doubledArray
    };
const onlyEvenValues = function(arr)    {
    let onlyEvenArray = []
    arr.forEach(function(val)  {
        if(val % 2 == 0)    {
            onlyEvenArray.push(val)
        }
            })
            return onlyEvenArray
}    
const showFirstAndLast = function(arr)  {
    let firstAndLastArray = []
    arr.forEach(function(val)  {
        let firstAndLastString = ""
        for(i=0; i<val.length; i++){
        if(i === 0 || i === val.length-1)   {
         firstAndLastString +=   val[i]
        }
        else{
            firstAndLastString += ''
        }
    }
        firstAndLastArray.push(firstAndLastString)
    })
    return firstAndLastArray
}
const addKeyAndValue = function(arr, key, val)    {
    arr.forEach(function(name){
    name.key = val
    })
    return arr
}
function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
}
const doubleValuesWithMap = function(arr)  {
    return arr.map(function(num)  { 
       return (num*2)
    })
}
const valTimesIndex = function(arr) {
    return arr.map(function(val,inx)    {
        return val*inx
    })
}
const extractKey = function(arr,key)    {
    return arr.map(function(val)    {
        return val[key]
    })
}
const extractFullName = function(arr)    {
    return arr.map(function(val)    {
        return val.first+ " " +val.last
    })
}
const filterByValue = (function(arr,key)    {
    return arr.filter(function(value)  {
        return value[key] !== undefined
    })
})
const find = function(arr,number)  {
    return arr.filter(function(val)    {
        return val === number
        })
        [0]
    }
const findInObj = function(arr,key,searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue
    })[0]
}
const removeVowels = function(string)   {

    let stringArray = string.split("")
    let  vowels = "aeiouAEIOU"
    return stringArray.filter(function(val) {
        return vowels.indexOf(val) === -1
    })
}
const doubleOddNumbers = function(arr)  {
    doubledOddArray = []
    let oddArray =arr.filter(function(val)    {
           return val % 2 === 1
    })
    oddArray.map(function(num)  {
        doubledOddArray.push(num*2)
    })
    return doubledOddArray
}
