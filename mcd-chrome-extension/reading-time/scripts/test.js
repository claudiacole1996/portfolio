// data-id = wren number
// td[4] confirmed cases

//loop wren numbers
//map through wren numbers on excell sheet (price data)
//multiply confirmed cases with price with matching wren numbers
//add all prices added to an array together and display

//when data changes on screen run loop


let onloadReady = false;

window.onload = (e) => {
    console.log('The page is loaded.');

    let truckPriceTotal = 0.00;

    function appendPopUpBox () {
        const parentContainer = document.getElementsByClassName('page-title')[0];
        console.log(parentContainer);
    }

    appendPopUpBox();
}