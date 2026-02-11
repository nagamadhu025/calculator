let input=document.querySelector("input");

function addvalue(elementVal){
    input.value +=elementVal;
}

function clearvalue(elementVal){
    input.value="";
}

function deletevalue(elementVal){
    input.value=input.value.slice(0,input.value.length-1);
}

function evaluatevalue(elementVal){
    input.value=eval( input.value )
}