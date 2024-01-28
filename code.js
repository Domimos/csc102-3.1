function playCraps(){
    console.log("playCraps function was called");
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is " + sum );

    document.getElementById("die1Result").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die2Result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("crapsResult").innerHTML = "The sum is: " + sum;

    if (sum == 7 || sum == 11){
        document.getElementById("sumResult").innerHTML = "You lose";
    }
    else if (die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsResult").innerHTML = "You win! :D";
    }
    else{
        document.getElementById("crapsResult").innerHTML = "You pushed (you tried)";
    }
}

function rollDie(){
    var die = Math.random() * 6;
    return Math.ceil(die);
}