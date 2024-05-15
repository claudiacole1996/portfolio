// data-id = wren number
// td[4] confirmed cases

//loop wren numbers
//map through wren numbers on excell sheet (price data)
//multiply confirmed cases with price with matching wren numbers
//add all prices added to an array together and display

//when data changes on screen run loop

window.onload = (e) => {
    console.log('The page is loaded');
}

setTimeout(function() {
    //visualize when function runs
    console.log('This is loaded last');

    //modify meta tage to allow script to read jQuery
    //document.querySelector('meta[name="description"]').setAttribute("content", _desc);
    
    /*add jQuery script tag to head of HTML
    const headID = document.getElementsByTagName("head")[0];         
    const newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'jquery-3.4.1.min.js';
    headID.appendChild(newScript);*/

    //get elements from DOM
    /*const table = $('#tab-2 table body');
    const rows = table.getElementsByTagName('TR');*/

    const table = document.querySelector('#tab-2');
    const rows = table.getElementsByTagName('TR');
    console.log(table);
    console.log(rows[1].textContent);

    //empty array for created object data
    let tableData = [];

    //function to get all rows into custom objects to add price to
    function appendData () {
        rows.forEach(function(row) {
            let object = {};
            cols = row.getElementsByTagName('TD');
            object.id = cols[1].textContent;
            object.qnt = cols[4].textContent;
        })
        tableData.push(object);
    }
    //call function
    appendData();
    console.log(tableData[0]);
}, 5000);