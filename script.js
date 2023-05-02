
let navBar = document.getElementById("nav-bar")
let oldScroll = 0
window.onscroll = function (e) {

    let currentScroll = document.documentElement.scrollTop

    if(currentScroll > oldScroll){      // for scroll down
        navBar.className = "hide"
    }else{                              // for scroll up
        navBar.className = ""
    }
    
    oldScroll = currentScroll;
}


