function setHomePage(homepage,la_url_es) {
    var agt=navigator.userAgent.toLowerCase();
    var is_major = parseInt(navigator.appVersion);

    var is_minor = parseFloat(navigator.appVersion);
    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
    var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    var is_ie3    = (is_ie && (is_major < 4));
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5")==-1) );
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5")==-1) && (agt.indexOf("msie 6")==-1));
    var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );

 if (is_win && is_ie5up) {
		oHomePage.style.behavior='url(#default#homepage)';
		oHomePage.setHomePage(homepage);
	}
}

function addToFavorite(favTitle){
  if ((navigator.appVersion.indexOf("MSIE") > 0) && (parseInt(navigator.appVersion) >= 4)) {
    window.external.AddFavorite(location.href, unescape(favTitle));
  }
}

