const uuid = document.getElementById("uuid");
const generate = document.getElementById("generate");

let rng = 0;

for (let x = 1; x < 33; x++) {
    rng = Math.floor(Math.random() * 16);

    switch (rng) {
        case 1:
            document.getElementById(`c${x}`).innerText = '1';
            break;
        case 2:
            document.getElementById(`c${x}`).innerText = '2';
            break;
        case 3:
            document.getElementById(`c${x}`).innerText = '3';
            break;
        case 4:
            document.getElementById(`c${x}`).innerText = '4';
            break;
        case 5:
            document.getElementById(`c${x}`).innerText = '5';
            break;
        case 6:
            document.getElementById(`c${x}`).innerText = '6';
            break;
        case 7:
            document.getElementById(`c${x}`).innerText = '7';
            break;
        case 8:
            document.getElementById(`c${x}`).innerText = '8';
            break;
        case 9:
            document.getElementById(`c${x}`).innerText = '9';
            break;
        case 10:
            document.getElementById(`c${x}`).innerText = '0';
            break;
        case 11:
            document.getElementById(`c${x}`).innerText = 'a';
            break;
        case 12:
            document.getElementById(`c${x}`).innerText = 'b';
            break;
        case 13:
            document.getElementById(`c${x}`).innerText = 'c';
            break;
        case 14:
            document.getElementById(`c${x}`).innerText = 'd';
            break;
        case 15:
            document.getElementById(`c${x}`).innerText = 'e';
            break;
        case 16:
            document.getElementById(`c${x}`).innerText = 'f';
            break;
    }
}

generate.onclick = function() {
    for (let x = 1; x < 33; x++) {
        rng = Math.floor(Math.random() * 16);

        switch (rng) {
            case 1:
                document.getElementById(`c${x}`).innerText = '1';
                break;
            case 2:
                document.getElementById(`c${x}`).innerText = '2';
                break;
            case 3:
                document.getElementById(`c${x}`).innerText = '3';
                break;
            case 4:
                document.getElementById(`c${x}`).innerText = '4';
                break;
            case 5:
                document.getElementById(`c${x}`).innerText = '5';
                break;
            case 6:
                document.getElementById(`c${x}`).innerText = '6';
                break;
            case 7:
                document.getElementById(`c${x}`).innerText = '7';
                break;
            case 8:
                document.getElementById(`c${x}`).innerText = '8';
                break;
            case 9:
                document.getElementById(`c${x}`).innerText = '9';
                break;
            case 10:
                document.getElementById(`c${x}`).innerText = '0';
                break;
            case 11:
                document.getElementById(`c${x}`).innerText = 'a';
                break;
            case 12:
                document.getElementById(`c${x}`).innerText = 'b';
                break;
            case 13:
                document.getElementById(`c${x}`).innerText = 'c';
                break;
            case 14:
                document.getElementById(`c${x}`).innerText = 'd';
                break;
            case 15:
                document.getElementById(`c${x}`).innerText = 'e';
                break;
            case 16:
                document.getElementById(`c${x}`).innerText = 'f';
                break;
        }
    }
}