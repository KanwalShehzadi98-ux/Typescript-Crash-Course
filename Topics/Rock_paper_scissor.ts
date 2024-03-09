let player1 : string = "Rock";
let player2 : string = "Scissor";

if (player1 === player2){
    console.log("Tie!!!");
}
else if((player1 === "Rock" && (player2 === "Paper" || player2 === "Scissor")) ||
        (player1 === "Scissor" && player2 === "Paper")){
    console.log("Players1 wins");
}

else{
    console.log("Player2 wins");
}