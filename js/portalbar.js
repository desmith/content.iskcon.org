/***
var barId   = 'portalbar';
var mapId   = 'portalmap';
var divId   = 'portaldiv';
var divNode = '';

function schedule(objectID, functionCall)
{
	if (!document.getElementById) { return; }

	if (document.getElementById(objectID)) {
		eval(functionCall);
	} else {
		setTimeout("schedule('" + objectID + "', '" + functionCall + "')", 120);
	}

	return true;
}

function init()
{
	if (!document.getElementById) return;

	var mapNode = document.getElementById(mapId);
	for (i = 0; i < mapNode.childNodes.length; i++) {
		mapNode.childNodes[i].onmouseover = showDescription;
		mapNode.childNodes[i].onmouseout  = hideDescription;
	}

	var barNode = document.getElementById(barId);
	divNode = document.createElement('div');
	divNode.name  = divId;
	divNode.id    = divId;
	divNode.className = 'portaldiv';
	divNode.innerHTML = '';

	var tmpNode;
	tmpNode = document.createElement('div');
	tmpNode.className = 'portalparent';
	tmpNode.style.display = 'none';

	divNode = tmpNode.appendChild(divNode);
	divNode = barNode.appendChild(tmpNode);
}

***/

function showDescription()
{
	divNode.firstChild.innerHTML = '';
	divNode.firstChild.innerHTML = this.title;
	divNode.style.display = 'block';
}

function hideDescription()
{
	divNode.style.display = 'none';
}

//schedule(barId, "init()\;");

