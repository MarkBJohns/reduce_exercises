// extractValue
// ----------------------------------------------------------------------------------------------------------------
const evNames=document.querySelectorAll('#extract .arr-enter');
const evBtn=document.querySelector('#extract button');
const evAnswer=document.querySelector('#extract .answer');
// ----------------------------------------------------------------------------------------------------------------
evBtn.addEventListener('click',function(){
    let objArr=Array.from(evNames).map(function(input){
        return{name:input.value};
    })
    evAnswer.value=JSON.stringify(objArr);
})
// ----------------------------------------------------------------------------------------------------------------
// vowelCount
// ----------------------------------------------------------------------------------------------------------------
const vowelField=document.querySelectorAll('#vowel .str-enter');
const vowelBtn=document.querySelector('#vowel button');
const vowelAnswer=document.querySelector('#vowel .answer');
// ----------------------------------------------------------------------------------------------------------------
vowelBtn.addEventListener('click',function(){
    const inputVal=Array.from(vowelField).map(input=>input.value);
    const vowelArr=inputVal.flatMap(str=>Array.from(str));
    const result=vowelCount(vowelArr);
    vowelAnswer.value=JSON.stringify(result);
})
// ----------------------------------------------------------------------------------------------------------------
// addKeyAndValue
// ----------------------------------------------------------------------------------------------------------------
const akvText=document.querySelector('#add-key-val p');
const akvKey=document.querySelector('#add-key-val .key');
const akvVal=document.querySelector('#add-key-val .val');
const akvBtn=document.querySelector('#add-key-val button');
const akvAnswer=document.querySelector('#add-key-val .answer');
// ----------------------------------------------------------------------------------------------------------------
akvBtn.addEventListener('click',function(){
    const newKey=akvKey.value;
    const newVal=akvVal.value;
    const newArr=addKeyAndValue(objArr,newKey,newVal)
    akvAnswer.value=JSON.stringify(newArr);
})
// ----------------------------------------------------------------------------------------------------------------
// partition
// ----------------------------------------------------------------------------------------------------------------
function limitCharAndMoveToNext(inptElmt){
    inptElmt.addEventListener('input',function(){
        let inputVal=this.value.toString();
        if(inputVal.length>=3){
            this.value=inputVal.slice(0,3);
            const nextInput=this.nextElementSibling;
            if(nextInput&&nextInput.tagName==='INPUT'){
                nextInput.focus();
            }
        }
    })
}
const partitionNames=document.querySelectorAll('#partition .arr-enter');
partitionNames.forEach(limitCharAndMoveToNext);
const partitionEvenBtn=document.querySelector('#partition .even');
const partitionOddBtn=document.querySelector('#partition .odd');
const partitionTrue=document.querySelector('#partition .true');
const partitionFalse=document.querySelector('#partition .false');
// ----------------------------------------------------------------------------------------------------------------
partitionEvenBtn.addEventListener('click',function(){
    const values=Array.from(partitionNames).map(input=>input.value,10);
    const [trueArr, falseArr]=partition(values,isEven);
    partitionTrue.value=JSON.stringify(trueArr);
    partitionFalse.value=JSON.stringify(falseArr);
})
partitionOddBtn.addEventListener('click',function(){
    const values=Array.from(partitionNames).map(input=>input.value,10);
    const [trueArr, falseArr]=partition(values,isOdd);
    partitionTrue.value=JSON.stringify(trueArr);
    partitionFalse.value=JSON.stringify(falseArr);
})