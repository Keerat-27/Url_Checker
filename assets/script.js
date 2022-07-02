
var tBody = document.getElementById("table-content");

function addItem(event) {
    if (typeof (event) == 'string' && event !== "") {
        let linksDataObj = JSON.parse(linksData);
        let divElement = '';
        for (var items in linksDataObj) {
            let { url, status, statusText, date } = linksDataObj[`${items}`];
            // console.log(url, status, statusText, date);
            dateObj = new Date(date).toLocaleString("en-US");
            // console.log(dateObj)
            if(status == 200)
                divElement = `<div class= "green"></div> ${status}`
            else
                divElement = `<div class= "red"></div> ${status}`

            tBody.innerHTML += `<tr>
            <!-- <th scope="row"></th> -->
            <td>${url}</td>
            <td>${statusText}</td>
            <td>${divElement}</td>   
            <td>${dateObj}</td>
          </tr>`;
        }
    }
}



/// Reading Links and initialiazing table
var readLinks = false;
var linksData = "";

const readData = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        readLinks = true;
        linksData = this.responseText;
        addItem(linksData);
        //console.log("Reci")
    }
    xhttp.open("POST", "./read");
    xhttp.send();
}

if (!readLinks) {
    readData();
}