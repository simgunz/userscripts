// ==UserScript==
// @name         Amazon return labels page break
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Put each amazon return label in a separate page. Fix for Amazon Italy.
// @author       Simone Gaiarin
// @match        https://www.amazon.*/spr/returns/label/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.return-label-image').css('break-after', 'page');
    $('head').append('<style type="text/css" media="print" id="print"></style>')
    $("#print").text(
        "@media print {" +
            ".return-label-image{" +
            "break-after: page" +
            "}" +
        "}"
    );
})();
