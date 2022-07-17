const random = document.getElementById("random");

let rnj = Math.floor(Math.random() * 7);

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
    case 5:
        random.innerText = "Buy Pro Subscription For 5.99/mo!";
        break;
    case 6:
        random.innerText = "I told you I added new messages.";
        break;
    default:
        random.innerText = "Error: Message Failed To Load";
        break;
}