console.log("Hi");
let message= document.querySelector("#message")
let addMovie=(event)=>{
     //We  are preventing submit behaviour of a form button to check some  calculation before it submits.We usually do this for button in forms if we have other calcultion to do and dont want it to run its internal submit logic
     event.preventDefault()
    let inputField = document.querySelector("input");
    let unorderedList = document.querySelector("ul");
    let movie = document.createElement("li");
    unorderedList.appendChild(movie);
    let movieTitle = document.createElement("span");// creating a span since we need to add crossing out function to it
    let deleteBtn = document.createElement("button");
   

    //adding span as the first child of li
    movie.appendChild(movieTitle);
    movieTitle.textContent= inputField.value;
    deleteBtn.textContent = "X";

   
    movie.append(deleteBtn);// adding delete button as second child of li
    deleteBtn.addEventListener("click",deleteMovie);
    movieTitle.addEventListener("click", crossOffMovie)
   
    inputField.value = "";
    message.textContent= "";

}

let deleteMovie=(event)=>{
   
    message.textContent= event.target.parentNode.firstChild.textContent+ " deleted!";
    //OR message.textContent = ${event.target.parentNode.childNodes[0].textContent} deleted!;
    event.target.parentNode.remove() ;//target is button, so it removes the li as button is child to li
    //JavaScript knows what the target of this event is (the specific delete button that’s clicked) and will only get rid of that one button’s parent (the movie list item that holds the title and button)
    revealMessage();
}

let crossOffMovie=(event)=>{
// here target is the span element
    event.target.classList.toggle("checked") 
    if(event.target.classList.contains("checked")){
        message.textContent = event.target.textContent+" watched"
        
    }
    else{
        message.textContent = event.target.textContent +" added back";
    }
    revealMessage();
}

let button = document.querySelector("button");
button.addEventListener("click",addMovie);
let revealMessage=()=>{
    setTimeout(()=>{message.classList.remove("hide")},1000);//here we want to run cb function to add the hide class and run the cb for for 1 second and the parameter takes milliseconds.it runs only so we will remove the hide class

}
