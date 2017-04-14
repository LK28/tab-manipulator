function sendMessage(message){
    chrome.runtime.sendMessage({action: message}, function(response){
        console.log(`MessageResponse: ${response}`);
    });
}

var actionElements = document.getElementsByClassName('action');
for (var key in actionElements){
    let action = actionElements[key];
    action.onclick = () => sendMessage(action.id);
}


window.onkeyup = function(e){
    if(e.shiftKey || e.ctrlKey){ return; } 
        
    if(e.key === "a"){
        sendMessage('sortByAge');
    }
    else if(e.key === "u"){
        sendMessage('sortByUrl');
    }
    else if(e.key === "d"){
        sendMessage('sortByNumDomain');
    }
};