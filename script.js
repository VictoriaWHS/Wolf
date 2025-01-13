
let wolf =0;
function wolves(){
    let wolf=Math.floor(Math.random()*2);
    console.log(" this is the number" + wolf);
    if (wolf==1){
        alert("wolf");
        //not working//
        }
    else{
        alert("no wolf");
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
function talkVillagers(){
    window.location.replace("villager.html");
}
function goChoose(){
    document.getElementById("wolfChoice").classList.remove("hide");
}
function goQuestion(){
    window.location.replace("question.html");
}




function wolfChoice(){
    alert("Wolf or no wolf");
    //This is where there is the choice//
    if (choice != "Go to pen"){
    }
}
function village(){
    alert("This is village");
}

function randomizeQuestions(){

}

function questions(){
    alert("This is ask questions");
}

function endGame(){

}
