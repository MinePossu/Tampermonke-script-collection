// ==UserScript==
// @name         next bussday
// @namespace    https://github.com/MinePossu/Tampermonke-script-collection/raw/main/next%20bussday.user.js
// @version      0.2
// @description  add arrows to move between bussiness days to wilma
// @author       MinePossu
// @match        *.inschool.fi/schedule*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inschool.fi
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */
this.$ = window.jQuery.noConflict(true);

(function() {
function getNextBusinessDay(date) {
  // Copy date so don't affect original
  date = new Date(+date);
  // Add days until get not Sat or Sun
  do {
    date.setDate(date.getDate() + 1);
  } while (!(date.getDay() % 6))
  return date;
}

// today,    Friday 26 Aug 2016
//getNextBusinessDay(new Date()).toLocaleString();

//get date usign url
var dwas = 0
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('date')) {
    var prodate = urlParams.get('date').split(".")
    dwas = new Date(Number(prodate[2]), Number(prodate[1])-1, Number(prodate[0]))
} else {
    dwas = new Date()
}
var asddfd = getNextBusinessDay(dwas)
var dateh=("0"+asddfd.getDate()).slice(-2)
var menth=("0"+(Number(asddfd.getMonth())+1)).slice(-2)
var yearh=dwas.getFullYear()

//Get BusinessDay of Next Week
console.log("?date="+dateh+"."+menth+"."+yearh);
var nextmon="?date="+dateh+"."+menth+"."+yearh

var cloneboi = $(".datepick-arrows-wrapper > a").eq(1).clone()
cloneboi.attr("href",nextmon).css("background-color", "lime").appendTo(".datepick-arrows-wrapper").attr("title",+dateh+"."+menth+"."+yearh)

//previous


function getPrevBusinessDay(date) {
  // Copy date so don't affect original
  date = new Date(+date);
  // Add days until get not Sat or Sun
  do {
    date.setDate(date.getDate() - 1);
  } while (!(date.getDay() % 6))
  return date;
}

// today,    Friday 26 Aug 2016
//getNextBusinessDay(new Date()).toLocaleString();

//get date usign url
dwas = 0
//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
if (urlParams.has('date')) {
    prodate = urlParams.get('date').split(".")
    dwas = new Date(Number(prodate[2]), Number(prodate[1])-1, Number(prodate[0]))
} else {
    dwas = new Date()
}
asddfd = getPrevBusinessDay(dwas)
dateh=("0"+asddfd.getDate()).slice(-2)
menth=("0"+(Number(asddfd.getMonth())+1)).slice(-2)
yearh=dwas.getFullYear()

//Get BusinessDay of Next Week
console.log("?date="+dateh+"."+menth+"."+yearh);
nextmon="?date="+dateh+"."+menth+"."+yearh

cloneboi = $(".datepick-arrows-wrapper > a").eq(0).clone()
cloneboi.attr("href",nextmon).css("background-color", "lime").prependTo(".datepick-arrows-wrapper").attr("title",+dateh+"."+menth+"."+yearh)
    //fix stupid colfixer
    const element = document.getElementsByClassName("datepick-wrapper");
    //console.log(element);
    element[0].classList.remove("col-fixer");
})();
