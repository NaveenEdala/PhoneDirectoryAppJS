var clickcount = 0;
var tablecount = 0;
var name = document.getElementById("name").value;
var number = document.getElementById("mobnumber").value;

function addFunction(id) {
    clickcount++;
    if (clickcount % 2 == 0) {
        closeEntry(id);
    } else {
        openEntry(id);
    }
}

function openEntry(id) {
    id.innerHTML = "Back";
    id.style.color = "black";
    document.getElementById("inputform").style.display = "block";

}
function closeEntry(id) {
    id.innerHTML = "Add your Number!";
    id.style.color = "white";
    document.getElementById("inputform").style.display = "none";
    document.getElementById("information").style.display = "none";
    document.getElementById("name").value = '';
    document.getElementById("mobnumber").value = '';
}

function inputinfo() {
    document.getElementById("information").style.display = "block";
    var name = document.getElementById("name").value;
    var number = document.getElementById("mobnumber").value;
    if (name == '' && number == '') {
        document.getElementById("information").style.display = "none";
    } else {
        document.getElementById("nameout").innerHTML = "Name: " + name;
        document.getElementById("mobnumberout").innerHTML = "Mobile Number: " + number;
    }
}

function submitentry() {
    tablecount++;
    var datatable = document.getElementById("census");
    var entry = document.createElement("tr"); entry.setAttribute("id", "Entry" + tablecount);
    var namecol = document.createElement("td");
    var numcol = document.createElement("td");
    var namecell = document.createTextNode(document.getElementById("name").value);
    var numcell = document.createTextNode(document.getElementById("mobnumber").value);
    namecol.appendChild(namecell); numcol.appendChild(numcell);
    entry.appendChild(namecol); entry.appendChild(numcol);
    datatable.appendChild(entry);
    closeEntry(initial);
    document.getElementById("tableofcontents").style.display = "block";
}

function removedata() {
    var datatable = document.getElementById("census");
    var disposal = document.getElementById("Entry" + tablecount);
    datatable.removeChild(disposal);
    tablecount--;
    if (tablecount == 0) {
        document.getElementById("tableofcontents").style.display = "none";
    }
}