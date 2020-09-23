var $ = document.querySelector.bind(document);
var banner = $("#banner-title");
var content = $("#content");

function get_data(url, title=null){
    content.innerHTML = "";
    if (url != '#'){
        fetch(url)
        .then(response => response.json())
        .then(json => {
            content.innerHTML = "";
            let table_header = get_table_header();
            let table = get_table(json);
    
            content.appendChild(table_header);
            content.appendChild(table);
    
            $("#table-menu").addEventListener("click", event_table_menu);
        })
    }
    banner.textContent = title;
}


function get_tr_keys(json){

    if (Array.isArray(json)) json = json[0];
    let tr = document.createElement('tr');
    for (let key in json) {
        let th = document.createElement('th');
        th.textContent = key.toUpperCase();
        tr.appendChild(th);
    }
    return tr;
}


function get_tr_elements(json){
    
    let tbody = document.createElement("tbody");
    json.forEach(element => {
        let tr = document.createElement("tr");
        let i = 0;
        for (let key in element) {
            let td = document.createElement("td");
            if (i < 1){
                td.innerHTML = '<input hidden type="checkbox"></input>' + element[key];
            }else{
                td.textContent = element[key];
            }
            tr.appendChild(td);
            i++;
        }
        tbody.appendChild(tr);      
    });
    return tbody;
}


function get_table(json){
    
    let div = document.createElement("div");
    div.setAttribute("class", "box-body");
    let table = document.createElement("table");
    table.setAttribute("class", "table");
    
    let thead = document.createElement('thead').appendChild(get_tr_keys(json));   
    let tbody = get_tr_elements(json);
    let tfoot = document.createElement('tfoot').appendChild(get_tr_keys(json));
    
    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);
    
    div.appendChild(table);
    return div;
}


function get_table_header(){

    let div = document.createElement('div');
    div.setAttribute("class", "header-data-table");
    div.innerHTML = `
        <div id="table-menu">
            <a id="add">
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-a</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><line x1='256' y1='176' x2='256' y2='336' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='336' y1='256' x2='176' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
            </a>
            <a id="select-menu">
                <svg>
                    <use xlink:href="img/menu_list.svg#dot3-horizontal"/>
                </svg>                                                 
            </a>
            <a hidden="hidden" id="select-all">
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-e</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><polyline points='352 176 217.6 336 160 272' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
            </a>
            <a hidden="hidden" id="delete-select-all">
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-m</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><line x1='320' y1='320' x2='192' y2='192' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='192' y1='320' x2='320' y2='192' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>                    
            </a>
        </div>
        <a id="table-search" class="search search-link">
            <input type="text" placeholder="Pesquisar">
        </a>
    `
    return div;
}


function event_table_menu(event){
    // console.log(event.target.parentNode);
    // console.log(event.target.parentNode.parentNode);
    if (event.target.parentNode.matches("#select-menu") || event.target.parentNode.parentNode.matches("#select-menu")){
    // if (event.target.parentNode.matches("#select-menu")) {
        var element = document.getElementById("select-all")
        if (element.getAttribute("hidden")){
            document.querySelector("#select-menu").style.transform = "rotate(90deg)"
            document.getElementById("delete-select-all").removeAttribute("hidden")
            element.removeAttribute("hidden")
            var checkbox = document.querySelector("tbody").querySelectorAll("input")
                for (let i=0; i < checkbox.length; i++){
                    checkbox[i].removeAttribute("hidden")
                }
        }else{
            document.querySelector("#select-menu").style.transform = "rotate(0deg)"
            document.getElementById("delete-select-all").setAttribute("hidden", "hidden")
            element.setAttribute("hidden", "hidden")
            var checkbox = document.querySelector("tbody").querySelectorAll("input")

            for (let i=0; i < checkbox.length; i++){
                checkbox[i].setAttribute("hidden", "hidden")
                checkbox[i].checked = false
            }
        }
    }else if (event.target.parentNode.matches("#select-all") || event.target.parentNode.parentNode.matches("#select-all")){
        var element = document.getElementById("select-all"); //let for ES6 aficionados 
        checkAll(); //again, function reference, no ()
    };

}

function checkAll() {
  
    var check = $("tbody").querySelectorAll("input")
    if (!check[0].checked){
        for (let i=0; i < check.length; i++){
            check[i].checked = true
        }
    }else{
        for (let i=0; i < check.length; i++){
            check[i].checked = false
        }
    }
};