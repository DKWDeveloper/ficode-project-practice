function allowdrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var Data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(Data));

}