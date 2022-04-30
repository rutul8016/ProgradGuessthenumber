let guessNumber = Math.floor(Math.random()*100)+1

function myfunc(){
    let val = document.getElementById("in").value
    if(val == ''){
        alert("Enter a number")
    }
    else{
        let num = parseInt(document.getElementById("in").value)
        if(num===guessNumber){
            document.getElementById("out").innerHTML = 'Got the answer correctly'
        }
        else if(num>guessNumber){
           document.getElementById("out").innerHTML = "Guess a smaller number"
        }
        else{
           document.getElementById("out").innerHTML = "Guess a greater number"
        }
    }
    
}
