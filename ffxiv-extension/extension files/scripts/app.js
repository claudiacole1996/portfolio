const gpDiv = document.querySelector('.l-box');
console.log(gpDiv);
const parentDiv = gpDiv.children;
console.log(parentDiv);
const bodyList = parentDiv[3].children;
console.log(bodyList);

for (i=0; i<bodyList.length; i++) {
    let div = bodyList[i].getElementsByTagName('DIV');
    let parent = div[1];
    if (parent) {
        let link = div[0].children[0].href;
        console.log(link);

        fetch(link)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });


        const spanElement = document.createElement('span');
        spanElement.textContent = "Info put here...testing";
        parent.appendChild(spanElement);
        spanElement.classList.add('c-gear-slot-item-info-color');
        spanElement.classList.add('u-inset');
        spanElement.style.display = "inline-block";
        spanElement.style.color = "white";
    }
}