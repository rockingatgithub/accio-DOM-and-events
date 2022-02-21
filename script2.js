// let numberOfClicks = 0;

function validateClicks2 () {
    numberOfClicks--;
    
    if(numberOfClicks < 0){
        alert("Can't click more");
        return;
    }
    // console.log("Click Number:-", numberOfClicks);
    
    // using template string
    // console.log(`Click Number:- ${numberOfClicks}`)   

    document.getElementById("div1").innerText = `Click Number:- ${numberOfClicks}`;

}



