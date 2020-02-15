// ==UserScript==
// @name         Amazon return labels page break
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Put each amazon return label in a separate page. Fix for Amazon Italy.
// @author       Simone Gaiarin
// @match        https://www.amazon.it/spr/returns/label/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('head').append('<style type="text/css" id="label-print"></style>')
    $("#label-print").text(
        "@page {" +
          "size: A4;" +
          "margin: 0;" +
        "}"
    );
    $('.printable-section').css('position', 'relative')
    $('.return-label-image').each( function() {
        let section = $($(this).parents()[1])
        section.after('<div style="break-after: page"><hr/></div>')
    });
})();
