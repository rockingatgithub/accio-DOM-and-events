//  DOM  
// document

// 1. document
// 2. document.body
//document.head

// window

// window.screen
// window.navigator

// document object is present in window object.

// how to fetch or target element

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName

// to get the text content of let's say a h1 tag

// document.getElementsByTagName("h1")[0].innerText;

// how to add/remove class of an element

// document.getElementById("div").classList.add("fav")
// document.getElementById("div").classList.remove("fav")
// document.getElementById("div").classList.toggle("fav")



// adding event listener to button and storing the count and dispalying it on page!

let numberOfClicks = 0;

function validateClicks () {
    numberOfClicks++;
    
    if(numberOfClicks > 3){
        alert("Can't click more");
        return;
    }
    // console.log("Click Number:-", numberOfClicks);
    
    // using template string
    // console.log(`Click Number:- ${numberOfClicks}`)   

    document.getElementById("div").innerText = `Click Number:- ${numberOfClicks}`;

}

let btn = document.getElementById("button")

btn.addEventListener('click', validateClicks);



// below method is to implement dark and light theme to our page!

function changeTheme () {

    if(document.body.style.backgroundColor !== 'black')
    {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        themeButton.innerText = 'Light Theme!';
        return;
    }

    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    themeButton.innerText = 'Dark Theme!';
}

let themeButton = document.getElementById("theme-btn");

themeButton.addEventListener('click', changeTheme);