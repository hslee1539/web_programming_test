
var musicList = document.getElementById("musicList");
var musicInput = document.getElementById("musicInput");

localStorageKey = "file:///C:/Users/qq153/OneDrive/project/web_programming_test/web_programming_test/web_programing_class/ex1/index.html";

function add(){
    let newItem = document.createElement("section");
    newItem.setAttribute("class", "musicItem");
    newItem.innerHTML = `
        <h3>
            {number}. {value}
        </h3>
    `.replace("{number}", musicList.children.length + 1).replace("{value}", musicInput.value);
    musicList.appendChild(newItem);
    let jsonRaw = localStorage[localStorageKey];
    let jsonObject = JSON.parse(jsonRaw);
    jsonObject["list"].push(musicInput.value);
    localStorage[localStorageKey] = JSON.stringify(jsonObject);
}

function onLoad(){
    let jsonRaw = localStorage.getItem(localStorageKey);
    if(jsonRaw = undefined){
        jsonRaw = `{"list":[]}`;
        localStorage[localStorageKey] = jsonRaw;
    }
    let jsonObject = JSON.parse(jsonRaw);
    let list = jsonObject["list"];
    if(list == undefined){
        list = new Array(0);
        jsonObject["list"] = list;
        localStorage[localStorageKey] = JSON.stringify(jsonObject);
    }
    for(let i = 0; i < list.length; i ++){
        let newItem = document.createElement("section");
        newItem.setAttribute("class", "musicItem");
        newItem.innerHTML = `
            <h3>
                {number}. {value}
            </h3>
        `.replace("{number}", i + 1).replace("{value}", list[i]);
        musicList.appendChild(newItem);
    } 
}