// COMPLETE!  get data from webpage and add to an array
// COMPLETE!  import sample data to test functions
// COMPLETE!  total price of truck order
// COMPLETE!  append truck price to the webpage
// COMPLETE!  style appended div
// COMPLETE!  fix extension to run when ALL tab is active
// run function when item is updated on page
// COMPLETE!  use google api to create real time json file

//get json file (temporarily hard coded) from google sheets
const url = "https://script.google.com/macros/s/AKfycbwONB4JKNfB5YI2DRVfVcRlZrfBkmqDAZrpkM6AGAoBT2-bKf2Bn-RvmoT4w0QFG6FI/exec";
const sheetData = [];

function getData(){
  fetch(url).then(function(rep){
    return rep.json()
  }).then(function(data){
    //console.log(data);
    data.posts.forEach(function(val){
      //console.log(val);
      let obj = {};
      obj.wren = val[1];
      obj.name = val[2];
      obj.cost = val[3];
      sheetData.push(obj);
    })
  })
}
getData();
//checking to see if on correct page

//allowing page to load all content before running
setTimeout(function() {
  //get tabset for event listener
  const tabSet = document.querySelector('.c-select-orders-tab');
  const ul = tabSet.querySelector('ul');
  const li = ul.getElementsByTagName('LI');
  //so div doesn't keep rendering
  let dataAppened = false;
  li[1].onclick = function() {
    //get table data
      const tab = document.querySelector('#tab-2');
      const table = tab.querySelector('table');
      const tableBody = table.querySelector('tbody');
      const rows = tableBody.getElementsByTagName('TR');

      //empty array for created object data
      let tableData = [];
      //empty array for missing wren numbers in data or no price
      let cantCompute = [];
      //money currency
      let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      //function to get all rows into custom objects to add price to
      function appendData () {
          for (i=0; i<rows.length; i++) {
              let object = {};
              let cantComputeObj = {};
              let row = rows[i].getElementsByTagName('TD');
              object.id = Number(row[1].textContent);
              cantComputeObj.id = object.id
              object.name = row[2].textContent;
              cantComputeObj.name = object.name
              object.qnt = Number(row[4].textContent);
              function getPrice() {
                let arr = sheetData.map(a => a.wren);
                let result = 0;
                if (object.qnt > 0) {
                  if (arr.includes(object.id)) {
                    result = sheetData.find(x => x.wren == object.id).cost;
                    if (result === 0) {
                      cantCompute.push(cantComputeObj);
                    }
                  } else {
                    cantCompute.push(cantComputeObj);
                  }
                }
                return result;
              }
              object.price = getPrice();
              object.priceTimesQnt = ((object.price * 100) * object.qnt) / 100;
              tableData.push(object);
          }
      }
      //call function to create array if hasn't already
      if (!dataAppened) {
        appendData();
      }

      //get total of truck cost by adding numbers
      function getTotal() {
        let result = 0;
        for (i=0; i<tableData.length; i++) {
          result += parseFloat(tableData[i].priceTimesQnt);
        }
        return USDollar.format(result);
      }
      const total = getTotal();
      console.log(total);

      //append all data to the DOM
      function addToDom () {
        const parentDiv = document.querySelector(".breadcrumb-wrapper");
        const appendedDiv = document.createElement('div');
        //style the appendedDiv
        appendedDiv.style.position = "relative";
        appendedDiv.style.float = "right";
        appendedDiv.style.top = "0";
        appendedDiv.style.right = "0";
        appendedDiv.style.width = "25%";
        //append div
        parentDiv.parentNode.insertBefore(appendedDiv, parentDiv.nextSibling);

        //truck price div
        const priceDiv = document.createElement('div');
        appendedDiv.appendChild(priceDiv);
        priceDiv.style.color = "white";
        //content for truck price div
        const h1 = document.createElement('h1');
        h1.textContent = "Total Price:"
        h1.style.fontSize = "18px"
        const h2 = document.createElement('h2');
        h2.classList.add('truck-total');
        h2.textContent = `${total}`;
        h2.style.fontSize = "20px";
        priceDiv.appendChild(h1);
        priceDiv.appendChild(h2);

        //missing wren number div
        const missingPriceDiv = document.createElement('div');
        missingPriceDiv.style.position = "relative";
        missingPriceDiv.style.display = "inline-block";
        appendedDiv.appendChild(missingPriceDiv);
        
        //dropdown button
        const dropDownButton = document.createElement('button');
        dropDownButton.textContent = "Missing Prices On Wren Numbers";
        dropDownButton.classList.add('dropdownBtn');
        dropDownButton.style.backgroundColor = "#0099FF";
        dropDownButton.style.padding = "10px";
        dropDownButton.style.border = "none";
        dropDownButton.style.position = "relative";
        dropDownButton.style.zIndex = "100";
        missingPriceDiv.appendChild(dropDownButton);
        //dropdown div
        const missingPriceDropdownDiv = document.createElement('div');
        missingPriceDiv.appendChild(missingPriceDropdownDiv);
        missingPriceDropdownDiv.classList.add('drop-content');
        missingPriceDropdownDiv.style.display = "none";
        missingPriceDropdownDiv.style.position = "absolute";
        missingPriceDropdownDiv.style.backgroundColor = "white";
        missingPriceDropdownDiv.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
        missingPriceDropdownDiv.style.zIndex = "1";
        missingPriceDropdownDiv.style.right = "0";
        //missingPriceDropdownDiv.style.width = "50%";
        //drop down button function
        dropDownButton.onclick = function() {
          if (missingPriceDropdownDiv.style.display === "block") {
            missingPriceDropdownDiv.style.display = "none"
          } else {
            missingPriceDropdownDiv.style.display = "block";
          }
        };

        //add all wren numbers with no price or missing from data sheet
        for (i=0; i<cantCompute.length; i++) {
          let span = document.createElement('span');
          span.textContent = cantCompute[i].id + " : " + cantCompute[i].name;
          span.style.color = "black";
          span.style.padding = "5px 10px";
          span.style.display = "block";
          missingPriceDropdownDiv.appendChild(span);
        }
        dataAppened = true;
      }
      if (!dataAppened) {
        addToDom();
      }

      /*for (j=0; j<tableData.length; j++) {
            if (tableData[j].id === Number(row[1])) {
              tableData[j].qnt = Number(row[4]);
              let h2 = document.getElementsByClassName('truck-total');
              h2.textContent = `${total}`;
              console.log(total);
            }
          }*/
      function ael() {
        console.log("even listener added");
      }
      //update truck price when qnt changes
      for (i=0; i<rows.length; i++) {
        let row = rows[i].getElementsByTagName('TD');
        row[4].addEventListener = ("click", ael)
        }
      }

      window.onclick = function(e) {
        if (!e.target.matches('.dropdownBtn')) {
          let drop = document.getElementsByClassName('drop-content');
          for (i=0; i<drop.length;i++) {
            let openDrop = drop[i];
            if (openDrop.style.display === 'block') {
              openDrop.style.display = "none";
            }
          }
        }
      }
 
  
}, 5000);