function clearResult(){
    document.getElementById("result").value=""
}
function deleteLast(){
    let result = document.getElementById("result")
    result.value = result.value.slice(0,-1);
}
function calculateResult(){
    let result = document.getElementById("result")
    result.value=eval(result.value)
}
function appendtoResult(value){
    let result = document.getElementById("result")
    result.value=result.value+value

}