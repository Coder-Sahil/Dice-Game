
console.log("Hey, Sahil is happy to welcome you to the dice gane, hope you like a game and recommend it to others too.")

var playerOne = "Player 1";
var playerTwo = "Player 2";

var playerOneWinCount = 0;
var playerTwoWinCount = 0;

var changeNameBtn = document.getElementById("name-change-btn");
changeNameBtn.onclick = function() {

    playerOne = prompt("Enter Player 1 Name : ");
    playerTwo = prompt("Enter Player 2 Name : ");

    if(playerOne != null || playerOne != "")
    {
        playerOne = ((playerOne.slice(0,1).toUpperCase()) + (playerOne.slice(1, playerOne.length).toLowerCase()))
    }

    if(playerTwo != null || playerTwo != "")
    {
        playerTwo = ((playerTwo.slice(0,1).toUpperCase()) + (playerTwo.slice(1, playerTwo.length).toLowerCase()))
    }

    document.querySelector("#player-one-name").innerHTML = playerOne;
    document.querySelector("#player-two-name").innerHTML = playerTwo;

    alert("Welcome To the Game " + playerOne + " and " + playerTwo);
}

var changeNameBtn = document.getElementById("roll-dice-btn");
changeNameBtn.onclick = function() {

    var winnerDiv = document.querySelector("#winner-div");
    winnerDiv.style.visibility = "hidden";

    document.querySelector("#player-one-win-count").classList.remove("item-hidden");
    document.querySelector("#player-one-win-count").classList.add("item-visible");
    document.querySelector("#player-two-win-count").classList.remove("item-hidden");
    document.querySelector("#player-two-win-count").classList.add("item-visible");

   var player1Num = (Math.floor((Math.random() * 6) + 1));
   var player2Num = (Math.floor((Math.random() * 6) + 1));

   document.querySelector("#player-one-dice-img").src = "Static/dice-images/dice"+player1Num+".png";
   document.querySelector("#player-two-dice-img").src = "Static/dice-images/dice"+player2Num+".png";

   

    if(player1Num > player2Num)
    {        
        ++playerOneWinCount;
        document.querySelector("#feature-winner").innerHTML = "<i class='fas fa-trophy'></i><em>  " + playerOne + "</em>    Wins"; 
        winnerDiv.style.visibility = "visible";
    }
    else if(player2Num > player1Num)
    {       
        ++playerTwoWinCount;
        document.querySelector("#feature-winner").innerHTML = " <i class='fas fa-trophy'></i><em>  " + playerTwo + "</em>   Wins"; 
        winnerDiv.style.visibility = "visible";
    }
    else
    {        
        document.querySelector("#feature-winner").innerHTML = "<i class='far fa-equals'></i><em> DRAW </em>";
        winnerDiv.style.visibility = "visible";
    }

    // document.querySelector("#player-one-win-count").innerHTML = " "+playerOne+ " : "+ playerOneWinCount;
    document.querySelector("#player-one-win-count").innerHTML = "Wins : " + playerOneWinCount;
    // document.querySelector("#player-two-win-count").innerHTML = " "+playerTwo+ " : "+ playerTwoWinCount; 
    document.querySelector("#player-two-win-count").innerHTML = "Wins :  " + playerTwoWinCount;
   

}

var resetBtn = document.querySelector("#reset-btn");
resetBtn.onclick = function() {

    playerOne = "Player 1";
    playerTwo = "Player 2";
    playerOneWinCount = 0;
    playerTwoWinCount = 0;

    document.querySelector("#player-one-name").innerHTML = playerOne;
    document.querySelector("#player-two-name").innerHTML = playerTwo;

    document.querySelector("#player-one-win-count").innerHTML = playerOneWinCount;
    document.querySelector("#player-one-win-count").classList.add("item-hidden");
    document.querySelector("#player-two-win-count").innerHTML = playerTwoWinCount;
    document.querySelector("#player-two-win-count").classList.add("item-hidden");

    var winnerDiv = document.querySelector("#winner-div");
    winnerDiv.style.visibility = "hidden";

    document.querySelector("#player-one-dice-img").src = "Static/dice-images/dice6.png";
    document.querySelector("#player-two-dice-img").src = "Static/dice-images/dice6.png";

}