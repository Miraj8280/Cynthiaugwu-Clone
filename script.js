const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower() {
    window.addEventListener("mousemove", function(details){
        // console.log(details);
        // console.log(details.clientX, details.clientY);

        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    })
}

circleMouseFollower();