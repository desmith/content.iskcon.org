function doClock()
{
  // By Paul Davis - www.kaosweaver.com
  var t=new Date(),a=doClock.arguments,str="",i,a1,lang="1";
  var month=new Array('January','Jan', 'February','Feb', 'March','Mar', 'April','Apr', 'May','May', 'June','Jun', 'July','Jul', 'August','Aug', 'September','Sep', 'October','Oct', 'November','Nov', 'December','Dec');
  var tday= new Array('Sunday','Sun','Monday','Mon', 'Tuesday','Tue', 'Wednesday','Wed','Thursday','Thr','Friday','Fri','Saturday','Sat');
  for(i=0;i<a.length;i++) {a1=a[i].charAt(1);switch (a[i].charAt(0)) {
  case "M":if  ((Number(a1)==3) && ((t.getMonth()+1)<10)) str+="0";
  str+=(Number(a1)>1)?t.getMonth()+1:month[t.getMonth()*2+Number(a1)];break;
  case "D": if ((Number(a1)==1) && (t.getDate()<10)) str+="0";str+=t.getDate();break;
  case "Y": str+=(a1=='0')?t.getFullYear():t.getFullYear().toString().substring(2);break;
  case "W":str+=tday[t.getDay()*2+Number(a1)];break; default: str+=unescape(a[i]);}}return str;
}

function MM_displayStatusMsg(msgStr) { //v1.0
  status=msgStr;
  document.MM_returnValue = true;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function P7_autoLayers() { //v1.4 by PVII
 var g,b,k,f,args=P7_autoLayers.arguments;a=parseInt(args[0]);if(isNaN(a))a=0;
 if(!document.p7setc){p7c=new Array();document.p7setc=true;for(var u=0;u<10;u++){
 p7c[u]=new Array();}}for(k=0;k<p7c[a].length;k++){if((g=MM_findObj(p7c[a][k]))!=null){
 b=(document.layers)?g:g.style;b.visibility="hidden";}}for(k=1;k<args.length;k++){
 if((g=MM_findObj(args[k]))!=null){b=(document.layers)?g:g.style;b.visibility="visible";f=false;
 for(var j=0;j<p7c[a].length;j++){if(args[k]==p7c[a][j]) {f=true;}}
 if(!f){p7c[a][p7c[a].length++]=args[k];}}}
}

function P7_hideDiv(evt) { //v1.3 by PVII
 var b,relT,mT=false;
 if(document.layers){b=evt.target;if(b.p7aHide){
  b.visibility="hidden";}else{routeEvent(evt);}
 }else if(document.all&&!window.opera){b=event.srcElement;
  while(b!=null){if(b.tagName=="DIV" && b.p7ahD){mT=true;break;}b=b.parentElement;}
  if(!b.contains(event.toElement)){b.style.visibility="hidden";}
 }else if(document.getElementById){b=evt.currentTarget;relT=evt.relatedTarget;
  while(relT!=null){if(b==relT){mT=true;break;}
  relT=relT.parentNode;}if(!mT){b.style.visibility="hidden";}}
}

function P7_autoHide() { //v1.3 by PVII
 var i,g,args=P7_autoHide.arguments;
 for(i=0;i<args.length;i++){if((g=MM_findObj(args[i]))!=null){
  g.p7aHide=true;if(document.layers){
  g.captureEvents(Event.MOUSEOUT);}g.onmouseout=P7_hideDiv;g.p7ahD=true;}}
}

function addToFavorite(favTitle){
  if ((navigator.appVersion.indexOf("MSIE") > 0) && (parseInt(navigator.appVersion) >= 4)) {
    window.external.AddFavorite(location.href, unescape(favTitle));
  }
}

function setHomePage(homepage,la_url_es) 
{
	var agt=navigator.userAgent.toLowerCase();    
	var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);    
	var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
		&& (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)                
		&& (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));    

	var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));    
	var is_ie3    = (is_ie && (is_major < 4));    
	var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5")==-1) );
	var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5")==-1) 
		&& (agt.indexOf("msie 6")==-1));

	var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
	var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );

	if (is_win && is_ie5up) 
	{
		oHomePage.style.behavior='url(#default#homepage)';
		oHomePage.setHomePage(homepage);
	}
}

function showDescription(msg)
{
	if (document.getElementById) {
    	//document.getElementById('infoDiv').innerHTML = '';
	    //infoDiv.style.display = 'block';
    	document.getElementById('infoDiv').innerHTML = msg;
	    document.getElementById('infoDiv').style.background = '#eee';
	    //document.getElementById('infoDiv').style.visibility = 'visible';
	}
}

function hideDescription()
{
	if (document.getElementById) {
		document.getElementById('infoDiv').innerHTML = '';
	    document.getElementById('infoDiv').style.background = '#fff';
		//document.getElementById('infoDiv').style.visibility = 'hidden';
		//infoDiv.style.display = 'none';
	}
}
