const sheetId = "1CdNTGl5726FB45fl_YoorZmMtw8fu6AsBBYXZzJ2q7Y";
const sheetName = encodeURIComponent("Dayton");
const sheetURL = `https://docs.google.com/spreadsheets/d/
${sheetId}/qviz/tq?tqx=out:csv&sheet=${sheetName}`;

fetch(sheetURL)
    .then((response) => response.text())
    .then((csvText) => handleResponse(csvText));

function handleResponse(csvText) {
    console.log(csvText);
    //let sheetObjects = csvToObjects(csvText);
    //console.log(sheetObjects);
}

console.log(sheetName);