/***** Ege Diker - March 6th 2016 
any // notes are provided from codepen/mad-d
*****/
"use strict";
document.addEventListener("DOMContentLoaded", init);

function init(ev) {
    //when page is ready add event listeners to every object as needed
    //add listeners to buttons
    var pl = document.querySelectorAll(".page-link");
  [].forEach.call(pl, function (obj, index) {
        //use touchend if this is for mobile only
        obj.addEventListener("click", navigate);
    });

    //add listeners to pages
    var pages = document.querySelectorAll("[data-role=page]");
  [].forEach.call(pages, function (obj, index) {
        //transition end listeners
        if (index == 0) {
            obj.className = "active-page";
        }
        obj.addEventListener("animationend", pageAnimated);
    });
}

function navigate(ev) {
    ev.preventDefault();
    var btn = ev.target;
    var href = btn.href;
    var page = href.split("#")[1];
    //history.pushState();
    var pages = document.querySelectorAll('[data-role="page"]');
    for (var p = 0; p < pages.length; p++) {
        //console.log(pages[p].id, page);
        if (pages[p].id === page) {
            pages[p].className = "active-page";
            //console.log("active ", page)
        } else {
            if (pages[p].className !== "inactive-page") {
                pages[p].className = "inactive-page";
            }
        }
    }
}

function pageAnimated(ev) {
    //console.log("Transition finished for " + ev.target.id);
    //console.dir(ev);
    var page = ev.target;
    if (page.className == "active-page") {
        console.log(ev.target.id, " has just appeared");
    } else {
        console.log(ev.target.id, " has just disappeared");
    }
}
