

let CountEl = document.getElementById("count-el")
let SaveEl = document.getElementById("save-el")

let count = 0 

console.log(CountEl)


function Increment(){
    
     count += 1

     CountEl.textContent = count
}

function Save(){

     let Savestr = count + " - "

     SaveEl.textContent +=  Savestr

  

     CountEl.textContent = 0
     count = 0 

}



