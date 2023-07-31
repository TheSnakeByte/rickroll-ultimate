const path = require("path");
const fs = require('fs');
require('console-png').attachTo(console);

function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const lyrics = [
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you"
]

console.rickroll = function(delay, repeat) {
  for (const line of lyrics) {
    console.log(line);
    if (delay > 1) {
      wait(delay);
    }
  }
  if (repeat == "infinite") {
    console.rickroll(delay, repeat);
  }
}

console.showRick = function() {
  var image = fs.readFileSync(path.join(__dirname, "assets/rick.png"));
  console.png(image);
}