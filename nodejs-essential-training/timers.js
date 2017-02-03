var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

console.log('Wait for it');

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var c = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime / waitTime) * 100);
    writeWaitingPercent(percentWaited);
    //console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);

setTimeout(function() {
    clearInterval(c);
    writeWaitingPercent(100);
    console.log("\n\ndone");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);