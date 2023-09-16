var database = [
    {
        username: "Kranthi",
        password: "12345678"
    }
];



var newsFeed = [
    {
        username: "Kiran",
        timeline: "so tired fromall that learning"
    },
    {
        username: "vennela",
        timeline: "im sleepy"
    }
];



var usernamePrompt = prompt("enter UserName");
var passwordPrompt = prompt("enter pass");


function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    } else{
        alert("Wrong");
    }
}

signIn(usernamePrompt,passwordPrompt);


// clrt + Shift + p 
// Quokka new js file 