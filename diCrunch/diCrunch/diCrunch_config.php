<?PHP

/* Which file extensions are OK for uploading? */

$permitted_files = array("txt", "itx", "htm", "html", "xml");



/* Processing time limit in seconds */

set_time_limit(5);



/* Intro text */

$intro_text = <<<CWS

CWS;



/* A list of available conversion options */

$convs = array (
	"balaram" => "Balaram",
	"csx" => "CSX",
	"hk" => "Harvard-Kyoto",
	"itrans" => "ITRANS",
	"shakti" => "Shakti Mac",
	"unicode" => "Unicode",
	"velthuis" => "Velthuis",
	"xsanskrit" => "X-Sanskrit",
	"remove" => "Remove",
	"bengali" => "Bengali script",
	"devanagari" => "Devanagari script",
	"oriya" => "Oriya script",
);

/* And which ones among them are script? */

$indic_scripts = array("bengali", "devanagari", "oriya");

/* And the descriptions for the conversion options. */

$legends = array (
	'balaram' => 'Allocating diacritic marks to characters in the extended ASCII range, commonly used in BBT and ISKCON productions. <a href="http://wiki.gaudiyakutir.com/Balaram" target="_blank">Read more</a>.',
	'csx' => 'Acronym for Classical Sanskrit eXtended, an encoding allocating characters to extended ASCII range. <a href="http://wiki.gaudiyakutir.com/CSX" target="_blank">Read more</a>.',
	'hk' => 'An ASCII-based transliteration system, using the XHK extensions. <a href="http://wiki.gaudiyakutir.com/XHK" target="_blank">Read more</a>.',
	'itrans' => 'Acronym for Indian languages TRANSliteration, an ASCII-based transliteration system. <a href="http://wiki.gaudiyakutir.com/XHK" target="_blank">Read more</a>',
	"shakti" => "A Mac-based diacritic system, named after a popular font.",
	"xsanskrit" => "An encoding used in some old BBT and ISKCON productions, input with a tool called KeySans.",
	'velthuis' => 'An ASCII-based transliteration system developed by Frans Velthuis. <a href="http://wiki.gaudiyakutir.com/Velthuis" target="_blank">Read more</a>',
	'unicode' => 'The standard IAST (International Alphabet of Sanskrit Transliteration) diacritics in Unicode, including the XIAST extensions. <a href="http://wiki.gaudiyakutir.com/XIAST" target="_blank">Read more</a>.',
	'remove' => 'Strips away diacritics, replacing them with approximate phonetic alternatives: ṣ becomes sh, ṛ becomes ri, the rest are removed.',
	'bengali' => 'The script used for writing Bengali, Manipuri and some other languages. <a href="http://en.wikipedia.org/wiki/Bengali_script" target="_blank">Read more</a>.',
	'devanagari' => 'The script used for writing Sanskrit, Hindi and several other languages. <a href="http://en.wikipedia.org/wiki/Devanagari_script" target="_blank">Read more</a>.',
	'oriya' => 'The script used for writing Oriya and some other languages.  <a href="http://en.wikipedia.org/wiki/Oriya_script" target="_blank">Read more</a>.',
);

?>