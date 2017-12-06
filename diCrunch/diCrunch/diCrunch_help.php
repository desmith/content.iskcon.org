<?PHP


$op .= <<<CWS

<div class="wrapper">
<h2>Help &nbsp; &middot; &nbsp; <a href="{$_SERVER['PHP_SELF']}">Home</a> &raquo;</h2>




<div class="preferenceheading">
<b>"Help me please!"</b> or "I spotted a bug!" or "I'd like to send feedback"...
</div>
<div class="preferencefield">
Please use the <b><a href="{$_SERVER['PHP_SELF']}?act=feedback">Feedback Module</a></b>.
</div>



<div class="preferenceheading">
"<b>I love this tool</b>, I use it every day! Can I give a donation?"
</div>
<div class="preferencefield">
<b>Yes please</b>, the gesture would be appreciated. Heaps of time and brainpower have gone into the development of this free utility.

<script type="text/javascript">document.write('<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&amp;business=funds'+'%40madhavananda' + '%2' + 'eco' + 'm' + '&amp;item_name=diCrunch&amp;item_number=108&amp;no_shipping=2&amp;no_note=1&amp;tax=0&amp;' + 'currency_code=EUR&amp;bn=PP%2dDonationsBF&amp;charset=UTF%2d8" target="_blank">');</script><b>Click to donate with PayPal!</b></a>

</div>

<hr />


<div class="preferenceheading">
<b>License and downloading</b> diCrunch sources.
</div>
<div class="preferencefield">
<b>diCrunch is licensed</b> under GNU General Public License. You can read the license <a href="{$_SERVER['PHP_SELF']}?act=license">here</a>. <b>To download the tool</b>, click <a href="http://www.bhasa.net/diCrunch.zip">diCrunch.zip</a>. For more, please read the <a href="http://wiki.gaudiyakutir.com/gkWiki:DiCrunch" target="_blank">project page</a> at gkWiki.
</div>


<div class="preferenceheading">
<b>Recommended fonts</b> for use with diCrunch.
</div>
<div class="preferencefield">
<b>The default font</b> for the diCrunch text processing field is <a href="http://www.code2000.net/" target="_blank">CODE2000</a>, a shareware Unicode font containing all XIAST diacritics and main Indic scripts in a single file. <b>For more Unicode fonts</b>, please see gkWiki: <a href="http://wiki.gaudiyakutir.com/Unicode_fonts" target="_blank">Unicode fonts</a>.
</div>

<div class="preferenceheading">
<b>Are there limitations</b> you are aware of?
</div>

<div class="preferencefield">
The <b>Shakti Mac</b> conversion doesn't currently support the <b>ṭ</b> character (which gets replaced by a space) or capital letters. The <b>X-Sanskrit</b> conversion doesn't currently support the <b>Ṝ</b> character. Help us identify and include these two characters that don't currently get copied to clipboard. <b>Oriya script</b> isn't properly supported by Windows XP, and as such is offered as an experimental addition. 
</div>


<div class="preferenceheading">
<b>What file types</b> can I upload for conversion? Are they stored somewhere?
</div>
<div class="preferencefield">
<b>The following file extensions</b> are permitted for uploaded files: <b>{$exts}</b>. Uploaded files are <b>not stored</b> on our server &ndash; they are uploaded into a temporary folder and purged as the conversion completes.
</div>


<div class="preferenceheading">
<b>Preferences</b> don't seem to get saved.
</div>
<div class="preferencefield">
Preferences are stored using <a href="http://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">cookies</a> &mdash; make sure your browser's privacy settings allow websites to set cookies.
</div>


<div class="preferenceheading">
<b>Text encodings</b> explained.
</div>
<div class="preferencefield">

CWS;
foreach ($convs as $key => $value) {
	$op .= "<b>{$value}</b>: {$legends[$key]}<br />\n";

}

$op .= <<<CWS

</div>





</div>

CWS;


?>