var values=[];
var services=[];


function fetch()
{
	//Fetching of personal information from regiter page in array values[]
	var temp;
	var parameters = window.location.search.substring(1).split("&");
	for(var i=0;i<parameters.length;i++)
	{
	temp = parameters[i].split("=");
	values[i] = unescape(temp[1]);
	}

	//Append the Account type in values[]
	var radio_group=document.getElementsByName('acc_type');
	for(var j=0;j<radio_group.length;j++)
	{
		if(radio_group[j].checked)
			values[i]=radio_group[j].value;
	}

	//Services[] stores the list of services required.
	var checkboxes=document.getElementsByName('services');
	for(var j=0;j<checkboxes.length;j++)
	{
		if(checkboxes[j].checked)
			services.push(checkboxes[j].value);
	}
}
function createRecord()
{
	fetch();
	document.write(services[2]);
	document.write(values[4]);
}
