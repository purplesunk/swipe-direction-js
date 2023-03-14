let prev = {}

function beginSliding(e) {
    prev = { x: e.clientX, y: e.clientY };
    thing.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
    thing.onpointermove = null;
    calculateDirection(e);
    thing.releasePointerCapture(e.pointerId);
}

function calculateDirection(e) {
    x = prev.x - e.clientX;
    y = prev.y - e.clientY;

    if (Math.abs(x) > Math.abs(y)) {
        if (x > 0) {
            p.innerText = 'Direction: left';
        }
        else {
            p.innerText = 'Direction: right';
        }
    }
    else if (Math.abs(y) > Math.abs(x)) {
        if (y > 0) {
            p.innerText = 'Direction: up';
        }
        else {
            p.innerText = 'Direction: down';
        }
    }

} 

const thing = document.querySelector('#thing');
const p = document.getElementById("p");

thing.onpointerdown = beginSliding;
thing.onpointerup = stopSliding;