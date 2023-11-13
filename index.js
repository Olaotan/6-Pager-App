let pagerMessage = document.getElementById("no-message")
let phoneMessage = document.getElementById("message-display")
let noFour = document.getElementById("4")



function key1(){
    if (phoneMessage.textContent == "No Message"){
        phoneMessage.textContent = 1
    } else {
        phoneMessage.textContent += 1
    }    
}

function key2(){
    if (phoneMessage.textContent == "No Message"){
        phoneMessage.textContent = 2
    } else {
        phoneMessage.textContent += 2
    }    
}

function key3(){
    if (phoneMessage.textContent == "No Message"){
        phoneMessage.textContent = 3
    } else {
        phoneMessage.textContent += 3
    }    
}

noFour.addEventListener("click", function(){
    if (phoneMessage.textContent == "No Message"){
        phoneMessage.textContent = 4
    } else {
        phoneMessage.textContent +=4
    }
})


function reset(){
    phoneMessage.textContent = "No Message"  
    pagerMessage.textContent = phoneMessage.textContent
}

function send(){
    pagerMessage.textContent = phoneMessage.textContent
}
