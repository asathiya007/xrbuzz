const moveLeft = document.querySelector('.moveLeft');
const moveRight = document.querySelector('.moveRight');
const moveUp = document.querySelector('.moveUp');
const moveDown = document.querySelector('.moveDown');
const moveForward = document.querySelector('.moveForward');
const moveBackward = document.querySelector('.moveBackward');

const shift = 0.25;
const el = document.querySelector('#xrbuzz');

moveLeft.addEventListener('click', function(e) {
    const event = new CustomEvent('move', { detail:{
        x: -1 * shift,
        y: 0,
        z: 0
    }});
    el.dispatchEvent(event);
}); 

moveRight.addEventListener('click', function (e) {
    const event = new CustomEvent('move', {
        detail: {
            x: 1 * shift,
            y: 0,
            z: 0
        }
    });
    el.dispatchEvent(event);
});

moveUp.addEventListener('click', function (e) {
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: 1 * shift,
            z: 0
        }
    });
    el.dispatchEvent(event);
});

moveDown.addEventListener('click', function (e) {
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: -1 * shift,
            z: 0
        }
    });
    el.dispatchEvent(event);
});

moveForward.addEventListener('click', function (e) {
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: 0,
            z: 1 * shift
        }
    });
    el.dispatchEvent(event);
});

moveBackward.addEventListener('click', function (e) {
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: 0,
            z: -1 * shift
        }
    });
    el.dispatchEvent(event);
});