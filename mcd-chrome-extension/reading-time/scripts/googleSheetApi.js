const url = "https://script.google.com/macros/s/AKfycbyzE_Kva1BhtZSpzdS2zej7HSmnd2iOIuV6Mj-Y53roJXzGgEin3znFPYO8p0oSbSr6/exec";
window.addEventListener('DOMContentLoaded', getData);
const output = document.querySelector('.output');

function getData(){
    output.innerHTML = "loading...";
    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    })
}