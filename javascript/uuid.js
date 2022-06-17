const uuid = document.getElementById("uuid");
const generate = document.getElementById("generate");

/* EVERY SINGLE UUID CHARACTER (apart from the hyphens)
this was also very tedious to write 
Fun Fact: These turned out to be absolutely useless. Love it :)
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");
const c10 = document.getElementById("c10");
const c11 = document.getElementById("c11");
const c12 = document.getElementById("c12");
const c13 = document.getElementById("c13");
const c14 = document.getElementById("c14");
const c15 = document.getElementById("c15");
const c16 = document.getElementById("c16");
const c17 = document.getElementById("c17");
const c18 = document.getElementById("c18");
const c19 = document.getElementById("c19");
const c20 = document.getElementById("c20");
const c21 = document.getElementById("c21");
const c22 = document.getElementById("c22");
const c23 = document.getElementById("c23");
const c24 = document.getElementById("c24");
const c25 = document.getElementById("c25");
const c26 = document.getElementById("c26");
const c27 = document.getElementById("c27");
const c28 = document.getElementById("c28");
const c29 = document.getElementById("c29");
const c30 = document.getElementById("c30");
const c31 = document.getElementById("c31");
const c32 = document.getElementById("c32");
*/

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