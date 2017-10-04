addEventListener('scroll', function() {
    timedAnimation("fade_in", "reveal");
    timedAnimation("slide_in", "slideIn");
});

function timedAnimation(trigger, animation) {
    var elements = document.getElementsByClassName(trigger);
    for(let i = 0; i < elements.length; i++) {
        if(!elements.item(i).classList.contains(animation)) {
            var pageDimensions = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
            if(intersecting(elements.item(i).getBoundingClientRect(), pageDimensions))
            elements.item(i).className += " " + animation;
        }
    }
}

addEventListener('touchstart', function() {
    var tn_background = document.getElementsByClassName("thumbnail_background");
    for(let i = 0; i < tn_background.length; i++) {
        tn_background.item(i).style["background-color"] = "rgba(0, 0, 0, 0.7)";
    }
    
    var tn_desc = document.getElementsByClassName("thumbnail_desc");
    for(let i = 0; i < tn_desc.length; i++) {
        tn_desc.item(i).style["-webkit-transform"] = "translate(0, -50%)";
        tn_desc.item(i).style["-moz-transform"] = "translate(0, -50%)";
        tn_desc.item(i).style["-o-transform"] = "translate(0, -50%)";
        tn_desc.item(i).style["-ms-transform"] = "translate(0, -50%)";
        tn_desc.item(i).style["transform"] = "translate(0, -50%)";
        tn_desc.item(i).style["opacity"] = "1";
    }
});

$(document).ready(function() {
    var fadeElements = document.getElementsByClassName("fade_in");
    if(!(fadeElements.item(0).getBoundingClientRect() !== undefined &&
         fadeElements.item(0).getBoundingClientRect().left !== undefined &&
         fadeElements.item(0).getBoundingClientRect().top !== undefined &&
         fadeElements.item(0).getBoundingClientRect().width !== undefined &&
         fadeElements.item(0).getBoundingClientRect().height !== undefined && 
         window.innerWidth !== undefined &&
         window.innerHeight !== undefined)) {
        for(let i = 0; i < fadeElements.length; i++) {
            fadeElements.item(i).style.opacity = 0;
        }
    }
});

function intersecting(box1, box2) {
    return (box1.left < box2.left + box2.width && box1.left + box1.width > box2.left && 
            box1.top < box2.top + box2.height && box1.top + box1.height > box2.top);
}
