//Global Variables declaration
var clickcount = 0;
var tablecount = 0;
var name = document.getElementById("name").value;
var number = document.getElementById("mobnumber").value;

//Onclick event tree for Add entry button
function addFunction(id) {
    clickcount++;
    if (clickcount % 2 == 0) {
        closeEntry(id);
    } else {
        openEntry(id);
    }
}
//Triggers on Add entry click
function openEntry(id) {
    id.innerHTML = "Back";
    id.style.color = "black";
    document.getElementById("inputform").style.display = "block"; /* Form visible */

}
//Triggers on Back click
function closeEntry(id) {
    id.innerHTML = "Add your Number!";
    id.style.color = "white";
    document.getElementById("inputform").style.display = "none"; /* Form hidden */
    document.getElementById("information").style.display = "none"; /* LiveText hidden */
    document.getElementById("name").value = '';
    document.getElementById("mobnumber").value = '';
}

//Live Text display trigger function
function inputinfo() {
    document.getElementById("information").style.display = "block";
    var name = document.getElementById("name").value;
    var number = document.getElementById("mobnumber").value;
    if (name == '' && number == '') {
        document.getElementById("information").style.display = "none"; /* Hides opened LiveText div if input is removed before submission */
    } else {
        document.getElementById("nameout").innerHTML = "Name: " + name;
        document.getElementById("mobnumberout").innerHTML = "Mobile Number: " + number;
    }
}

//Upon submitting data in fields (adding entry)
function submitentry() {
    tablecount++; clickcount++
    var datatable = document.getElementById("census");
    var removebtn = document.createElement("button"); /* remove button creation */
    removebtn.setAttribute("class", "removebutton"); removebtn.innerHTML = "Remove Entry"; removebtn.setAttribute("onclick", "removedata()");
    var entry = document.createElement("tr"); entry.setAttribute("id", "Entry" + tablecount);
    var namecol = document.createElement("td");
    var numcol = document.createElement("td");
    var remcol = document.createElement("td");
    var namecell = document.createTextNode(document.getElementById("name").value);
    var numcell = document.createTextNode(document.getElementById("mobnumber").value);
    namecol.appendChild(namecell); numcol.appendChild(numcell); remcol.appendChild(removebtn);
    entry.appendChild(namecol); entry.appendChild(numcol); entry.appendChild(remcol);
    datatable.appendChild(entry); /* complete input of data directly into table */
    closeEntry(initial);
    document.getElementById("tableofcontents").style.display = "block";
}

//on clicking remove of an entry
function removedata() {
    var datatable = document.getElementById("census");
    var disposal = document.getElementById("Entry" + tablecount);
    datatable.removeChild(disposal);
    tablecount--;
    if (tablecount == 0) {
        document.getElementById("tableofcontents").style.display = "none"; /* hides table if no entries */
    }
}

/* NOTE: Data input from form is NOT being stored onto any SQL or PHP database since it is a simple frontend application. */