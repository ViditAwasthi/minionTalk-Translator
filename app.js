var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.getElementById("div-output");
var url = "	https://api.funtranslations.com/translate/minion.json"

function constructURL(text){
    return url +"?text="+text
}

function handleError(error){
    console.log("error occured", error);
}

btnTranslate.addEventListener("click", function clickEventHandler(){  

    var constructedURL = constructURL(txtInput.value);

    fetch(constructedURL)
    .then(response => response.json())
    .then(json => {divOutput.innerText = json.contents.translated})
    .catch(handleError)
    
})