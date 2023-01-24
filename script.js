const $message = document.querySelector('.mes');
const $copy = $message.cloneNode(true);
const insertPoint = document.querySelectorAll('.mes'); 

function AddMessage(){

    var nameInp = document.querySelector('#inp').value;
    var msgInp = document.querySelector('#area').value

    if((msgInp.length > 0) && (nameInp.length > 0))
    {
        var lastInsPoint = insertPoint[insertPoint.length - 1];
        lastInsPoint.insertAdjacentElement('afterend', $copy);

        var nodes = document.querySelectorAll('.name');
        var lastNode = nodes[nodes.length - 1];
        lastNode.innerHTML = nameInp;

        var dateTime = document.querySelectorAll('.date');
        var lastDT = dateTime[nodes.length - 1];
        var now = new Date().toLocaleString();
        lastDT.innerHTML = now;

        var msgs = document.querySelectorAll('.mesText');
        var lastMsg = msgs[nodes.length - 1];
        lastMsg.innerHTML = msgInp;
    }
    else{
        alert('Заполнены не все данные форм');
    }

}

