addEventListener('scroll', function() {
    var fadeElements = document.getElementsByClassName("fade_in");
    for(i = 0; i < fadeElements.length; i++) {
        if(!fadeElements.item(i).classList.contains("reveal")) {
            var pageDimensions = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
            if(intersecting(fadeElements.item(i).getBoundingClientRect(), pageDimensions))
                fadeElements.item(i).className += " reveal";
        }
    }
})

$(document).ready(function() {
    var fadeElements = document.getElementsByClassName("fade_in");
    if(!(fadeElements.item(0).getBoundingClientRect() !== undefined &&
         fadeElements.item(0).getBoundingClientRect().left !== undefined &&
         fadeElements.item(0).getBoundingClientRect().top !== undefined &&
         fadeElements.item(0).getBoundingClientRect().width !== undefined &&
         fadeElements.item(0).getBoundingClientRect().height !== undefined && 
         window.innerWidth !== undefined &&
         window.innerHeight !== undefined)) {
        for(var i = 0; i < fadeElements.length; i++) {
            fadeElements.item(i).style.opacity = 0;
        }
    }
});

function intersecting(box1, box2) {
    return (box1.left < box2.left + box2.width && box1.left + box1.width > box2.left && 
            box1.top < box2.top + box2.height && box1.top + box1.height > box2.top);
}
