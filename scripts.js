// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let status = document.getElementById('flightStatus');
    let background = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    let takeOff = this.document.getElementById('takeOff');
    takeOff.addEventListener('click', function () {
        result = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (result) { //shorthand for result === true
            status.innerHTML = 'Shuttle in flight';
            background.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10000';
        }
    });

    let land = this.document.getElementById('land');
    land.addEventListener('click', function (){
        result = window.alert('The shuttle is landing. Landing gear engaged.');
        if (result) {
            status.innerHTML = 'The shuttle has landed.';
            background.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        }
    });

    let abortMission = this.document.getElementById('abortMission');
    abortMission.addEventListener('click', function (){
        result = window.confirm('Confirm that you want to abort the mission');
        if (result) {
            status.innerHTML = 'Mission aborted.';
            background.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        }
    });
}

window.onload = init;