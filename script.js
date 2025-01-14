
wolfExists=false;

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

function goPen(){
    //home = Pen//
    
    window.location.replace("pen.html");
  
}
function goVillage(){
    window.location.replace("village.html");
    
}


function wolfChoice(isWolf){
    //This is where there is the choice//
    if (isWolf==true){
        alert("Wolf")
    }
    else alert("No wolf");
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
    if (points>0||sheep>0){
        alert("You have won.  You have " + points+" points, and " +sheep + " left!");
    }
}
