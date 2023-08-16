// Script for the prod-track images
const track1 = document.getElementById("track1-prod");
const track2 = document.getElementById("track2-prod");
const track3 = document.getElementById("track3-prod");
const track4 = document.getElementById("track4-prod");
const track5 = document.getElementById("track5-prod");
const track6 = document.getElementById("track6-prod");
const track7 = document.getElementById("track7-prod");
const track8 = document.getElementById("track8-prod");

let mouseDownAt = 0;
let prevPercentage = 0;

function handleDrag(track) {
    track.addEventListener('mousedown', e => {
        mouseDownAt = e.clientX;
    });

    track.addEventListener('mouseup', () => {
        mouseDownAt = 0;
        prevPercentage = track.dataset.percentage;
    });

    track.addEventListener('mousemove', e => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -70;
        const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%)`
        }, { duration: 1500, fill: "forwards" });

        for (const image of track.querySelectorAll(".coffee-prod, .food-prod, .brewed-prod, .baked-prod")) {
            image.style.objectPosition = `${100 + nextPercentage}% center`;
        }
    });
}

handleDrag(track1);
handleDrag(track2);
handleDrag(track3);
handleDrag(track4);
handleDrag(track5);
handleDrag(track6);
handleDrag(track7);
handleDrag(track8);

// End of script //