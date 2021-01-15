function hide(e, reflow) {
    if (reflow) {
        console.log(typeof reflow)
        e.style.display = "none";
    }else{
        e.style.visibility - "hidden";
    }
}

function highlight(e) {
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}