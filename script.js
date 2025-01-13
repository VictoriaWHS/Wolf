
let wolf =0;
function wolves(){
    let wolf=Math.floor(Math.random()*2);
    if (wolf==1){
        }
    else{
    } 
    goPen();
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
}

function randomizeQuestions(){

}

function questions(){
    alert("This is ask questions");
}

function endGame(){
    if (points>0||sheep>0){
        alert("You have won.  You have " + points+" points, and " +sheep + " left!");
    }
}
