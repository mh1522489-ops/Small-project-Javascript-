const DEFAULT_NAME = "Tom";

function getUserName() {
const input = prompt("Hi, what is your name?")?.trim();
if (!input) {
alert("You didn't enter a name, so I'll use a default one.");
return DEFAULT_NAME;
}
return input;
}

function getGreeting(name, hour) {
if (hour < 6) return Good night, ${name}; if (hour < 8) returnWake up, ${name}! The day is beautiful;
if (hour < 12) return Hi ${name}, have a happy day; if (hour < 13) returnHi ${name}, hope your day is going well;
if (hour < 18) return How was the nap, ${name}?; returnGood evening, ${name};
}

console.log(getGreeting(getUserName(), new Date().getHours()));
