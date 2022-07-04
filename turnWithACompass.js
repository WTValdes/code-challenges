/*
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"

*/

function direction(facing, turn){
    let compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    if (turn > 360 || turn < -360) {
      turn = turn % 360;
    }
    let clicks = turn / 45;
    let dest = compass.indexOf(facing) + clicks;
    
    if (dest > (compass.length - 1)) {
      dest = dest - compass.length;
    }
    
    if (dest < 0)
      dest = dest + compass.length;
    
    return compass[dest];
  }

