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

    const tab = document.querySelector('#tab-2');
    const table = tab.querySelector('table');
    const tableBody = table.querySelector('tbody');
    const rows = tableBody.getElementsByTagName('TR');

    //empty array for created object data
    let tableData = [];

    //function to get all rows into custom objects to add price to
    function appendData () {
        for (i=0; i<rows.length; i++) {
            let object = {};
            cols = rows[i].getElementsByTagName('TD');
            object.id = cols[1].textContent;
            object.qnt = cols[4].textContent;
            tableData.push(object);
        }
    }
    //call function
    appendData();
    console.log(tableData);
}, 5000);