// let my_name = 'Kevin'
// let my_id = '2112'
// let my_address = 'Memphis,TN'
// console.log(
// `My name is ${my_name}. 
//  My id is ${my_id}. 
//  My address is ${my_address}.`)

// let constestant = "1_M_l337!"
// let score = "9001"

// console.log(`Congratulations ${constestant} !!, your score is ${score}.`)


// Get the Home and Visting Team from the user
let HomeTeam = prompt("What is your Home team?");
let VisitingTeam = prompt("What is your Visiting team?");

// Get the Score from the user 
let Score = prompt(`How many points did the ${HomeTeam} score?`);
let Score2 = prompt(`How many points did the ${VisitingTeam} score?`);

// Have the team that won appear 
// !! : this is an impossible condition
if (Score > Score2 && Score2 > Score) 
{
console.log( alert(
    `Looks like the ${HomeTeam} have defeated the ${VisitingTeam}! 
       
    FINAL SCORE:
    Home/ ${HomeTeam}: ${Score}   
    Visitor/${VisitingTeam}: ${Score2} `) )
    } 
else if (Score == Score2)
{
  console.log( alert(
    `Looks like the ${HomeTeam} have tied the ${VisitingTeam}! 
    
    FINAL SCORE:
    Home/ ${HomeTeam}: ${Score}   
    Visitor/${VisitingTeam}: ${Score2} ` ) )

}
//  !! : this runs if team A wins or if team B wins bc your first condition is never met
else 
{
    alert(
        `Looks like the ${VisitingTeam} have defeated the ${HomeTeam}! 
           
        FINAL SCORE:
        Home/ ${HomeTeam}: ${Score}   
        Visitor/${VisitingTeam}: ${Score2} `) 
  
    }
