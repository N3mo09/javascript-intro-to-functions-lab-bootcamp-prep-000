function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var lowercase = "hello!"
var uppercase = "HELLO!"
var mixedCase = "I love you, Grandma."
function sayHiToGrandma(string) {
   if (mixedCase.toLowerCase() === lowercase) {
     return "I can\'t hear you!"
} else if (mixedCase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }
    else {
      return "I love you, too."
    }
  }
