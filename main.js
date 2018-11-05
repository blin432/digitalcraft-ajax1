
var content=document.getElementById('content');

var state= {
    buttonText: "generate Doggo",
    
}

content.innerHTML=renderHTML(state);
function changeButton(game){
   
    state.buttonText="generating Doggo...";
    
    
    axios.get('https://dog.ceo/api/breeds/image/random').then(function(response){

    document.getElementById('dog').innerHTML=`<img src="${response.data.message}"/>`
    }); 

    
    content.innerHTML=renderHTML(state);
    state.buttonText="generate Doggo";
    content.innerHTML=renderHTML(state);
    
    

};


function renderHTML(){

   
    console.log(state.buttonText);
    return `  <button onclick="changeButton()">${state.buttonText}</button>
    <div id="dog">
        
    </div>`
}