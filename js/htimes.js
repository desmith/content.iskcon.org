function goTo(fld)
{
	var id = fld.options[fld.selectedIndex].value;
	if (id != "") {
		var url = "htimes.php?id=" + id ;
		location.href = url
	} else {
		strMsg = "Please select an article to view";
		fld.focus();
		return false;
	}
}

