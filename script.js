
var wolfExists=false;
var sheep=12
var points=0
function globals(){
    let wolfExists=localStorage.getItem("wolfExists");
    console.log("wolf? " +  wolfExists);
}
function wolves(){
    let wolf=Math.floor(Math.random()*2);
    if (wolf==1){
        wolfExists=true;
        }
    else{
        wolfExists=false;
    } 
    localStorage.setItem("wolfExists", wolfExists);
}
function newRound(){
    wolves();
    alert("the wolf is" + wolfExists);
    goPen();
}
function goPen(){
    window.location.replace("pen.html");
  
}
function goVillage(){
    window.location.replace("village.html");
    
}


function wolfChoice(){
//doesnt work
    let choice =prompt("Wolf or no wolf?");
    //wolfExists says if theres a wolf.  Line 42 is basically saying that]
    //if choice is wolf and _______(wolf or no wolf) You win.  I dont understand this.
    //I have to write three of these somehow.
        if (choice=="wolf" && wolfExists){
            alert("no change to sheep. +1 point");
            points++
        }
        else {
            alert("-2 sheep, -1 point.");
            sheep-=2;
            points--;
        }
        alert("New round");
        newRound();
}

function village(){
    alert("This is village");
    randomizeQuestions();
    askingLimit = 3
    questionsAsked =0
    answer = prompt("talk to a villager");
    //not well above//
    if (answer != "exit"){
        if (askingLimit>QuestionsAsked){
            questions();
        }
            else {
                alert("asking limit reached.");
                goPen();
            }
        // else {
        //     askVillage();
        // }
    }
}

function randomizeQuestions(){

}

function questions(){
    let answer = questionsAsked;
    //need to add questions to parameter//
    alert("Make sure to write everything perfectly or else it wont work.");
    prompt("What would you like to ask the villager?");
    if (answer != choices){
        alert("That is not a possible option.  Try again");
        questions();
    }
    //else and then put array
}

function endGame(){
    if (points>0&&sheep>0){
        alert("You have won.  You have " + points+" points, and " +sheep + " left!");
    }
}
