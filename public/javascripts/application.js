// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function()
{
    $input = $('input#user_email');

    $input.focus( function()
    {        
        $input.css('color', $input.val() === DEFAULT_VALUE ? '#aaa' : '#000');

        alert( "wow");
        alert( $input === DEFAULT_VALUE);
    });
   

});