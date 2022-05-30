/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable (seconds) {
    let hours = 0;
    let minutes = 0;
    if (seconds >= 3600) {
      hours = Math.floor(seconds / 3600);
      seconds = seconds % 3600;
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    } else if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (hours < 10) {
      hours = '0' + hours.toString();
    }
    if (minutes < 10) {
      minutes = '0' + minutes.toString();
    }
    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }
    return hours + ':' + minutes + ':' + seconds;
  }