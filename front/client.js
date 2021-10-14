const xhr = new XMLHttpRequest();

var getterButton = null;

function pageReady() 
{
	console.log('[pageReady]');
	
	getterButton = document.getElementById('getButton');
}

function getButton() 
{
	console.log('[getButton] pressed');
	getRequest();
}


function getRequest() 
{
	let url = document.getElementById("requestUrl").value;
	let baseUrl = "http://localhost:8081/societes?url=";
	console.log('[send] : ', baseUrl+url);

	xhr.open("GET", baseUrl+url);
	xhr.send();
}

xhr.onload = function() 
{
	if (xhr.status === 200) 
	{
	  data = JSON.parse(xhr.responseText);
	  console.log(data);

	  document.getElementById("companyName").innerHTML = data.companyName;
	  document.getElementById("employees").innerHTML = data.employees;
	}
	else
	if (xhr.status === 404) 
	{
	  console.log("No records found");
	}
}

xhr.onprogress = function(e) 
{
	if (e.lengthComputable) 
	{
		console.log(`${e.loaded} B of ${e.total} B loaded!`)
	} 
	else 
	{
		console.log(`${e.loaded} B loaded!`)
	}
 }

function errorHandler(err) 
{
	console.error(err);
}
