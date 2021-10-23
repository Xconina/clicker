
let count = 0
function increment() {
   var press = document.getElementById("btn") 
   var counter = document.getElementById("counter")
    count += 1
    counter.innerHTML= count 
}
function saved(){
  var saved = document.getElementById("saved")
    
   var countstr = count + ("-")
    saved.innerHTML  = saved.innerHTML + countstr
    countstr.innerHTML  = 0
    count = 0
}

