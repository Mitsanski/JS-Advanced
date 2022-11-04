function timeToWalk(steps, footprint, speed) {
        let distanceInMeters = steps * footprint;
        let speedInM = speed / 3.6;
        let time = distanceInMeters / speedInM;
        let rest = Math.floor(distanceInMeters / 500);

        let timeMin = Math.floor(time / 60);
        let timeSec = Math.round(time - (timeMin * 60));
        let timeH = Math.floor(time / 3600);

        console.log((timeH < 10 ? '0' : "") + timeH + ':' + (timeMin + rest < 10 ? '0' : '') + ( timeMin + rest ) + ':' + (timeSec < 10 ? '0' : '') + timeSec);
}
timeToWalk(4000, 0.60, 5) 