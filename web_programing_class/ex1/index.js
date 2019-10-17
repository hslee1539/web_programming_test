
var musicList = document.getElementById("musicList");
var musicInput = document.getElementById("musicInput");


function add(){
    let newItem = document.createElement("section");
    newItem.setAttribute("class", "musicItem");
    newItem.innerHTML = `
        <h3>
            {number}. {value}
        </h3>
    `.replace("{number}", musicList.children.length + 1).replace("{value}", musicInput.value);
    musicList.appendChild(newItem);
}