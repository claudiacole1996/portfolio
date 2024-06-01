const url = "https://script.google.com/macros/s/AKfycbyzE_Kva1BhtZSpzdS2zej7HSmnd2iOIuV6Mj-Y53roJXzGgEin3znFPYO8p0oSbSr6/exec";
window.addEventListener('DOMContentLoaded', getData);
const output = document.querySelector('.output');
const btnSave = document.querySelector('.saver');
const iName = document.querySelector('input[name=name');
const iMes = document.querySelector('input[name=message');
const repMessage = document.querySelector(".rep");

btnSave.addEventListener('click', sData);

function sData(e){
    e.preventDefault();
    repMessage.textContent = "Sending";
    let val1 = iName.value|| 'unknown';
    let val2 = iMes.value|| "Message";
    iName.style.display = "none";
    iMes.style.display = 'none';
    let arr = [val1,val2];
    let formData = new FormData();
    formData.append('data', JSON.stringify(arr));
    fetch(url,{
        method: 'POST',
        body: formData
    }).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    })
}


function getData(){
    output.innerHTML = "loading...";
    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
        output.innerHTML = "";
        data.posts.forEach(function(val){
            console.log(val);
            let html = document.createElement('div');
            html.innerHTML = val[1] + ' ' + val[2] + ' ' + val[3] + '<br>';
            output.appendChild(html); 
        })
    })
}