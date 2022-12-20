guests=[];

function submit()
{
    var GuestName = document.getElementById("name_input").value;
	guests.push(GuestName);
	console.log(GuestName);    
    console.log(guests);
    var lengthofname = guests.length;
    console.log(lengthofname);
	document.getElementById("output").innerHTML=guests.toString();
   }
function show()
   {
       var a = guests.join("<br>");
       console.log(guests);
       document.getElementById("output2").innerHTML=a.toString();
       document.getElementById("output2").style.display="block";
   }
function sort() {
    guests.sort();
		var a= guests.join("<br>");
		console.log(guests);		
		document.getElementById("output3").innerHTML=a.toString();
}
function searching()
{
	var s= document.getElementById("search_input").value;
	var searching=0;
	var b;
	for(b=0; b<guests.length; b++)
		{
			if(s==guests[b]){
				searching=searching+1;
			}	
		}
	document.getElementById("output4").innerHTML="Name found "+searching+" time/s";
	console.log("Name found "+searching+" time/s");
}