// jQuery Load
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// ... give time for script to load, then type.
jQuery.noConflict();


$('.cw-TypedTextBox')[0].value = $('.current-word')[0].innerText

jQuery('.cw-TypedTextBox').trigger('keydown')


// Hack around case where word is last word in line (no space)
$('.cw-TypedTextBox')[0].value = $('.current-word')[0].innerText + " "

jQuery('.cw-TypedTextBox').trigger('keydown')