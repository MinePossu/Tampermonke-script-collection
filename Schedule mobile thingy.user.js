// ==UserScript==
// @name         Schedule mobile thingy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.inschool.fi/schedule*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inschool.fi
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
        var x;
    //schedule mobile fix
    x=document.getElementsByClassName("weekday"); // Find the elements
    for(var i = 0; i < x.length; i++){
        //console.log(x[i].textContent.split(" ")[1]);
        x[i].innerText=x[i].textContent.split(" ")[1]; // Change the content
    }
})();