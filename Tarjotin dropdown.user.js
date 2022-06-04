// ==UserScript==
// @name         Tarjotin dropdown
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MinePossu
// @match        *.inschool.fi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inschool.fi
// @grant        none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
    'use strict';

    // Your code here...
    $('[data-path=\"ShowOpenTrays\"] > .panel-body > .row').attr('hidden',true);
    $('[data-path=\"ShowOpenTrays\"] > .panel-body > h1').append( "<button class=\"pull-right\" onclick=\"$('[data-path=&quot;ShowOpenTrays&quot;] > .panel-body > .row').attr('hidden',!$('[data-path=&quot;ShowOpenTrays&quot;] > .panel-body > .row').is(&quot;:hidden&quot;));\">&gt;</button>" );
})();