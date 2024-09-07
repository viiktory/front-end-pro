let yearUser = prompt("What year were you born?");
let cityUser = prompt("What city do you live in?");
let hobbyUser = prompt("What is your favorite sport??");

if (yearUser === null || yearUser.trim() === "") {
    console.log("It is a pity that you did not want to enter your year of birth");
} else {
    let ageUser = 2024 - (+yearUser);
    if (isNaN(ageUser) || ageUser < 0) {
        console.log("Incorrect year of birth");
    } else {
        console.log(`Your age: ${ageUser}`);
    }
}

if (cityUser === null || cityUser.trim() === "") {
    console.log("It is a pity that you did not want to enter your city");
} else {
    cityUser = cityUser.trim().toLowerCase();
    if (cityUser === "kyiv" ||
        cityUser === "washington" ||
        cityUser === "london") {
        console.log(`You live in the capital: ${cityUser}`);
    } else {
        console.log(`You live in the city: ${cityUser}`);
    }
}

let boxer = "Oleksandr Usyk";
let fencer = "Olga Kharlan";
let footballer = "Andriy Shevchenko";

if (hobbyUser === null || hobbyUser.trim() === "") {
    console.log("It's a pity that you didn't want to enter your favorite sport");
} else {
    hobbyUser = hobbyUser.trim().toLowerCase();
    if (hobbyUser === "boxing") {
        console.log(`Steeply! Do you want to be like: ${boxer}?`);
    } else if (hobbyUser === "fencing") {
        console.log(`Steeply! Do you want to be like: ${fencer}?`)
    } else if (hobbyUser === "football") {
        console.log(`Steeply! Do you want to be like: ${footballer}?`)
    } else {
        console.log(`Your favorite sport: ${hobbyUser}`);
    }
}
