console.log('reduce');
const objArr=[
    {name:'Mark'},
    {name:'Siera'},
    {name:'Morgan'},
    {name:'Michael'}
];

const testString='jkljoijelkjoiiopolkjllcmejlmlmocmepknocijuoijol';

const numArr=[1,2,3,4,5,6,7,8,9,10];
// ----------------------------------------------------------------------------------------------------------------
//      EXTRACT VALUE
// ----------------------------------------------------------------------------------------------------------------

function extractValue(arr,searchKey){
    return arr.reduce(function(accumulator,currentVal){
        accumulator.push(currentVal[searchKey]);
        return accumulator;
    },[])
}
// ----------------------------------------------------------------------------------------------------------------
//      VOWEL COUNT
// ----------------------------------------------------------------------------------------------------------------
function  vowelCount(str){
    let strArr=Array.from(str);
    return strArr.reduce(function(accumulator,currentVal){
        const vowels=['a','e','i','o','u'];
        if(vowels.includes(currentVal.toLowerCase())){
            if(accumulator[currentVal.toLowerCase()]===undefined){
                accumulator[currentVal.toLowerCase()]=1;
            }else{
                accumulator[currentVal.toLowerCase()]+=1;
            }
        }
        return accumulator;
    },{});
}

// ----------------------------------------------------------------------------------------------------------------
//      ADD KEY AND VALUE
// ----------------------------------------------------------------------------------------------------------------

function addKeyAndValue(arr,newKey,newVal){
 return arr.reduce(function(accumulator,currentVal){
    const newObj={...currentVal};
    newObj[newKey]=newVal;
    accumulator.push(newObj);
    return accumulator;
 },[])
}

akvText.innerText=JSON.stringify(objArr);
// ----------------------------------------------------------------------------------------------------------------
//      PARTITION
// ----------------------------------------------------------------------------------------------------------------

function isEven(val){
    return val%2===0;
}
function isOdd(val){
    return val%2!==0;
}

function partition(arr,funct){
    return arr.reduce(function(result,element){
        const isTrue=funct(element);
        result[isTrue?0:1].push(element);
        return result;
    },[[],[]])
}