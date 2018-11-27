const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

const rounds = 1;
const dollars = 100;
const players = 50;
const player1 = [];
const player2 = [];


function coinFilp() {
    return Math.random() > .5;
}

function shufflePlayers(){
    let rand = Math.random * players;
    let tmp = player2;
    
    for(let i = 0; i < players; i++){
        if(rand + i < player){
            player2[i] = tmp[rand + i];
        } else {
            player2[i] = tmp[rand + i - players];
        }
    }

}

function startGame(){

    for(let x = 0; x < rounds; x++){

        for(let i = 0; i < players; i++){
            if(coinFilp()){
                player[i]++;
                player[i]--;
            } else {
                player[i]--;
                player[i]++;
            }
        }
        shufflePlayers();
    }

}


//give players money
for(let x = 0; x < players; x++){
    player1.push(dollars);
    player2.push(dollars);
}
