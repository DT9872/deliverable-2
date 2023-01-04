document.write("Project 2");
let score = 0;

let name = prompt("Welcome to GC mini golf! What is your name? ");
console.log("Hi," + name + "!");
let Num_Putts = parseInt(prompt("Hi, " + name + "! Would you like to play 3 or 6 holes? "));
console.log("You chose to play " + Num_Putts);

if (Num_Putts == 3) {
  let par = 9;
  
  let Putt1 = parseInt(prompt("How many putts for hole 1?"));
  console.log("You chose " + Putt1 + " putts for hole 1.");
  let Putt2 = parseInt(prompt("How many putts for hole 2?"));
  console.log("You chose " + Putt2 + " putts for hole 2.");
  let Putt3 = parseInt(prompt("How many putts for hole 3?"));
  console.log("You chose " + Putt3 + " putts for hole 3.");

  let sumtotal = parseFloat(Putt1 += Putt2 += Putt3);
  console.log("User score is " + sumtotal);
  let userpar = parseInt(par - sumtotal);
  
  if (userpar == 0) {
  console.log("Good game, " + name + ". Your total par was 0.");
  } 
else if (userpar > 0 && userpar < 9) {
    console.log("Great job, " + name + ". Your total par was: -" + userpar);
} 
else 
    console.log("Nice try, " + name + "... Your total par was: +" + (userpar * -1));
} else if (Num_Putts == 6) {
  let par = 18;
  
  let Putt1 = parseInt(prompt("How many putts for hole 1?"));
  console.log("You chose " + Putt1 + " putts for hole 1.");
  let Putt2 = parseInt(prompt("How many putts for hole 2?"));
  console.log("You chose " + Putt2 + " putts for hole 2.");
  let Putt3 = parseInt(prompt("How many putts for hole 3?"));
  console.log("You chose " + Putt3 + " putts for hole 3.");
  let Putt4 = parseInt(prompt("How many putts for hole 4?"));
  console.log("You chose " + Putt4 + " putts for hole 4.");
  let Putt5 = parseInt(prompt("How many putts for hole 5?"));
  console.log("You chose " + Putt5 + " putts for hole 5.");
  let Putt6 = parseInt(prompt("How many putts for hole 6?"));
  console.log("You chose " + Putt6 + " putts for hole 6.");

  let sumtotal = parseFloat(Putt1 += Putt2 += Putt3 += Putt4 += Putt5 += Putt6);
  console.log("User score is " + sumtotal);
  let userpar = parseInt(par - sumtotal);
  
  if (userpar == 0) {
  console.log("Good game, " + name + ". Your total par was 0.");
  } 
else if (userpar > 0 && userpar < 18) {
    console.log("Great job, " + name + ". Your total par was: -" + userpar);
} 
else 
    console.log("Nice try, " + name + "... Your total par was: +" + (userpar * -1));
} 