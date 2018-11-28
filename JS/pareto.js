const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

const dollars = 100;
const players = 50;

var player1 = [];
var player2 = [];
var counts = [];

/*
function getCounts(){
    for(let i = 0; i < players; i++){
        counts[player1[i]] += 1;
        counts[player2[i]] += 1;
    }
    console.log(player1);
    counts = counts.filter(function(number) {
        return number !== 0;
      }).sort();
    for(let i = 0; i < counts.length; i++){
        console.log(counts);
    }
}
*/

function coinFilp() {
    return Math.random() > .5;
}

function redistPlayers(){
    let tmp = player1.concat(player2);
    tmp.sort();
    player1 = [];
    player2 = [];
    ref = 0;
    for(let i = 0; i < tmp.length; i++){
        if(ref === 0){
            player1.push(tmp[i]);
        } else {
            player2.push(tmp[i]);
        }
        ref ^= 1;
    }
}

function run(rounds){
    startGame(rounds);
    let tmp = player2;
    console.log(tmp.sort());
    tmp = player1;
    console.log(tmp.sort());
}

function shufflePlayers(){
    let rand = Math.random() * players | 0;
    let tmp = player2;
    player2 = [];

    for(let i = 0; i < players; i++){
        if(rand + i < players){
            player2.push(tmp[rand + i]);
        } else {
            player2.push(tmp[rand + i - players]);
        }
    }

}

function startGame(rounds){

    for(let x = 0; x < rounds; x++){

        for(let i = 0; i < players; i++){
            if(player1[i] !== 0 && player2[i] !== 0){
                if(coinFilp()){
                    player1[i]++;
                    player2[i]--;
                } else {
                    player1[i]--;
                    player2[i]++;
                }
            }
        }
        shufflePlayers();

        if(x % 10000 === 0){
            redistPlayers();
        }
    }

}


//give players money
for(let x = 0; x < players; x++){
    player1.push(dollars);
    player2.push(dollars);
}

run(10);
run(100);
run(1000);
run(10000);
run(100000);
run(1000000);
run(10000000);
