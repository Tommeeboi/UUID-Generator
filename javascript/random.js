const random = document.getElementById("random");

let rnj = Math.floor(Math.random() * 5);

switch (rnj) {
    case 0:
        random.innerText = "Very Original";
        break;
    case 1:
        random.innerText = "Javascript > Java";
        break;
    case 2:
        random.innerText = "Featuring Best Code!";
        break;
    case 3:
        random.innerText = "Sponsored By Raid Shadow Legends (not)";
        break;
    case 4:
        random.innerText = "Why Did You Pick This One Again?";
        break;
    default:
        random.innerText = "Error: Message Failed To Load";
}