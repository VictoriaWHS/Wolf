function goPen(){
    window.location.replace("pen.html");
  
}
function goVillage(){
    window.location.replace("village.html");
    
}
function goChoose(){
    window.location.replace("guess.html");
}


function wolves(){
    let v=Math.random(Math.floor()*2);
    console.log(" this is the number" + v);
    //above is just to check its working//
    if (v==1){
        alert("wolf");
        home();
        }
    else{
        alert("no wolf");
    } 
}


function goHome(){
    
}

function wolfChoice(){
    alert("This is wolfChoice");
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
