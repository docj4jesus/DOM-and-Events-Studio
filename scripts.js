// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let status = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let imgObj = document.getElementById('rocket');
    imgObj.style.position= 'absolute';
    imgObj.style.bottom = '0px';
    imgObj.style.left = '0px';
    


    let takeoff = this.document.getElementById('takeoff');
    takeoff.addEventListener('click', function () {
        result = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (result) { //shorthand for result === true
            status.innerHTML = 'Shuttle in flight';
            background.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10000';
        }
    });

    let landing = this.document.getElementById('landing');
    landing.addEventListener('click', function (){
        result = window.alert('The shuttle is landing. Landing gear engaged.');
        
        status.innerHTML = 'The shuttle has landed.';
        background.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        
    });

    let missionAbort = this.document.getElementById('missionAbort');
    missionAbort.addEventListener('click', function (){
        result = window.confirm('Confirm that you want to abort the mission');
        if (result) {
            status.innerHTML = 'Mission aborted.';
            background.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        }
    });

    let up = this.document.getElementById('up');
    up.addEventListener('click', function (){
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;   
    });

    let down = this.document.getElementById('down');
    down.addEventListener('click', function (){
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement; 
    });

    let left = this.document.getElementById('left');
    left.addEventListener('click', function (){
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    });

    let right = this.document.getElementById('right');
    right.addEventListener('click', function (){
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    });
}

window.onload = init;