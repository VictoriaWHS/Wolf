
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
    goPen();
}
function goPen(){
    window.location.replace("pen.html");
  
}
function goVillage(){
    window.location.replace("village.html");
    
}

function buttonChoice(wolfPick){
    let message="";
    if (wolfPick==true){
        message="You predict a wolf<br>";
    }
    else message="You predict no wolf<br>";
    let feedBack=document.createElement("div");
    message+="let's see if you're right..."
    feedBack.innerHTML=message;
    feedBack.id="feedBack";
    document.body.appendChild(feedBack);
    let findOut=document.createElement("button");
    findOut.innerHTML="find out";
    findOut.id="find out";
    findOut.addEventListener("click",wolfChoice);
    feedBack.appendChild(findOut);
}

function wolfChoice(){
//doesnt work
    alert("The wolf " + wolfExists);
        if (choice=="wolf" && choice==wolfExists && wolfExists){
            alert("no change to sheep. +1 point");
            points++
        }
        else if(choice=="noWolf"&& choice==wolfExists && wolfExists){
            alert("no change to sheep. +1 point");
            points++
        }
        else if(choice=="wolf"&&choice!=wolfExists && wolfExists){
            alert("-2 sheep, -1 point.");
            sheep-=2;
            points--;
            alert("wolf = " + wolfExists+ " and choice = "+ choice)
        }
        else if(choice=="noWolf"&&choice!=wolfExists) {
            alert("-2 sheep, -1 point.");
            sheep-=2;
            points--;
            alert("wolf = " + wolfExists+ " and choice = "+ choice)
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
