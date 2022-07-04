
var tBody = document.getElementById("table-content");

function addItem(event) {
    if (typeof (event) == 'string' && event !== "") {
        let linksDataObj = JSON.parse(linksData);
        let divElement = '';
        let count = 1;
        let nameList = ["Jmc","Sggscc","Miranda House","Shivaji College","ANDC","Aurobindo College","Gargi College","Kalindi College","Vasanta College","Dyal Singh College","Holy Family College"
        ,"Hansraj College","Placement Cell Hansraj","Hansraj Faculty","Hansraj Alumni","SRCC Smartprof","LSR Smartprof","Lady Reading School","LAHDC SSRB","Ladakh Heli Services","Langham Capital"
        ,"Delhi EV","Delhi EV Incentive","Ladakh Connect","LEH Permit","Sakoon","Vaishno Devi","District Udham Nagar","Ladakh EYE","Motor Vehicle Department"];
        for (var items in linksDataObj) {
            let { url, status, statusText, date } = linksDataObj[`${items}`];
            dateObj = new Date(date).toLocaleString("en-US");
            if(status == 200)
                divElement = `<div class= "green"></div>`
            else
                divElement = `<div class= "red"></div> ${status}`

            tBody.innerHTML += `<tr>
            <!-- <th scope="row"></th> -->
            <td>${count++}</td>
            <td>${nameList[count-2]}</td>
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
    $(".progress-bar").animate({
        width: "70%",
    }, 500);
    xhttp.onload = function () {
        readLinks = true;
        linksData = this.responseText;
        $(".progress-bar").animate({
            width: "100%",
        }, addItem(linksData));
    }
    
    xhttp.open("POST", "./read");
    xhttp.send();
}

if (!readLinks) {
    readData();
}
