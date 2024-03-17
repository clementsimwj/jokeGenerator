const generateJoke = document.getElementById("generateJoke");
const jokeSetUp = document.getElementById("setup");
const jokeDelivery = document.getElementById("delivery");

generateJoke.addEventListener("click", async event=>{
    event.preventDefault();
    try{
        const jokeObject = await fetchJoke();
        document.getElementById("container").style.display = "block";
        if(jokeObject.type === "twopart"){
            jokeSetUp.textContent = jokeObject.setup;
            jokeDelivery.textContent = jokeObject.delivery;
        }
        else{
            jokeSetUp.textContent = jokeObject.joke;
            jokeDelivery.textContent = "";
        }
    }
    catch(error){
        console.log(error);
    }
})

async function fetchJoke(){
    const apiURL = 'https://v2.jokeapi.dev/joke/Any';
    const response = await fetch(apiURL);
    if(!response){
        throw new Error("Communication Problem");
    }
    return await response.json();
}

