function userProfile(name) {
    console.log("Hello "+name)
}

userProfile("Arun")

const double=(num)=>{
    console.log(num*2)
}
double(5)

const delay = function(){
    setTimeout(() => {
        console.log("This messager is dealyed by 2 seconds");
        
    }, 2000);
}
delay()

function getUserData(a) {
    setTimeout(() => {
        a()
    }, 3000);
}

function call() {
    console.log("Call Back Function");
    
}
getUserData(call)