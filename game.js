let Player_scr = 0;
        let Comp_scr = 0;
        
        function getComputerChoice(){
            let  x = Math.floor(Math.random()*3);
            if (x == 0){
                return "rock";
            }
            else if (x == 1){
                return "paper";
            }
            else {
                return "scissors";
            }
        }
        function getHumanChoice(){
            return prompt("Rock,Paper or Scissors");
        }

        function playRound(humanChoice,computerChoice){
            humanChoice = humanChoice.toLowerCase();
            if(humanChoice===computerChoice){
                console.log("TIE");
            }
            else if((humanChoice==="rock" && computerChoice==="scissor")||(humanChoice==="paper"&&computerChoice==="rock")||((humanChoice==="scissors"||humanChoice==="scissor")&&computerChoice==="paper")){
                Player_scr += 1;
                console.log("Player wins this round!");
            }
            else{
                Comp_scr +=1;
                console.log("Computer wins this round!");
            }
    
        }
        function playGame(){
            playRound(getHumanChoice(),getComputerChoice());
            playRound(getHumanChoice(),getComputerChoice());
            playRound(getHumanChoice(),getComputerChoice());
            playRound(getHumanChoice(),getComputerChoice());
            playRound(getHumanChoice(),getComputerChoice());
            if (Player_scr == Comp_scr){
                console.log("The game is a tie.");
            }
            else if (Player_scr > Comp_scr){
                console.log("The Player wins.");
                
            }
            else{
                console.log("The Computer wins.");
                
            }
            console.log("Player Score: "+ Player_scr +" Computer Score: "+Comp_scr);
        }
        playGame();