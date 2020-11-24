function change()
{
	value = prompt("Vad vill du att det ska stå i paragrafen?");
	if(value != "")
	{
		this.childNodes[0].nodeValue = value;
	}
	else
	{
		alert("Du måste skriva in något i rutan!");
	}
}



function add()
{
	var tal1 = parseInt(document.getElementById("t1").value);
	var tal2 = parseInt(document.getElementById("t2").value);
	var sum = tal1 + tal2;
	
	var p = next(this);
	var p = next(p);
	
	p.childNodes[0].nodeValue = tal1 + " + " + tal2 + " = " + sum;	
}

function subs()
{
	var tal1 = parseInt(document.getElementById("t1").value);
	var tal2 = parseInt(document.getElementById("t2").value);
	var sum = tal1 - tal2;
	
	var p = next(this);
	
	p.childNodes[0].nodeValue = tal1 + " - " + tal2 + " = " + sum;	
}


function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType != 1);
    return elem;                
}


function init()
{
	var par = document.getElementsByClassName("change");
	for(var i = 0; i < par.length; i++)
	{
		par[i].onclick = change;
	}
	
	var plus = document.getElementById("plus");
	plus.onclick = add;
	var minus = document.getElementById("minus");
	minus.onclick = subs;
}

window.onload = init;