let arr = [];
let input = document.querySelector("input");
let btn = document.getElementById("btn");
let tbody = document.getElementById("tableBody");
let td = document.querySelectorAll("td");

btn.addEventListener("click", function(){
    if(input.value !== ""){
        arr.push(input.value);
        input.value = "";
        addtolist();
    }
})

function addtolist(){
    let tr = document.createElement("tr");
    tr.classList.add("todos");
    tbody.appendChild(tr);

    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = arr[arr.length-1];
    
    let d = document.createElement("i");
    td.appendChild(d);
    td.addEventListener("click",function(){
        td.classList.toggle("line");
        d.classList.toggle("fa-solid");
        d.classList.toggle("fa-trash");
        d.classList.toggle("delete");
    });

    d.addEventListener("click", function(){
        td.remove();
    })

}

