let btn = document.getElementById("btn");
let input_name = document.getElementById("input-name");
let listitems = document.getElementById("listitems");

function same(){
    let input_value = input_name.value;
    if(input_value == '') return window.alert("Give a work");
    let list =  document.createElement("div");
    list.classList.add("list_items","list");
    list.innerText = input_name.value;
    listitems.append(list);

    let div_list = document.createElement("div");
    div_list.classList.add("div-list");
    list.append(div_list);

    let btn = document.createElement("button");
    btn.textContent = 'Completed';
    btn.classList.add("btn-list");
    div_list.append(btn);

    let icon = document.createElement("i");
    icon.classList.add("fa","fa-times","icon");
    icon.setAttribute("aria-hidden",true);
    div_list.append(icon);

    input_name.value='';
    
    function finish(){
        btn.style.backgroundColor = "lightgreen";
    }
    btn.addEventListener('click',finish);
    
    function fun(){
        btn.style.backgroundColor = "lightgreen";
    }
    btn.addEventListener('click',fun);

    function remove(){
        list.remove();
    }
    icon.addEventListener('click',remove);
}

let paradiv = document.getElementById("div-1"); 

function enter(event){
    if(event.key === "Enter"){
        btn.click();
    }
}

input_name.addEventListener('keypress',enter);
btn.addEventListener('click',same);