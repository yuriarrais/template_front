let _get_keys = json => {

    if (Array.isArray(json)) json = json[0];
    return Object.keys(json)
}

let _get_tr_head_foot = keys => {

    return `
        <tr>
            ${keys.map(key => `
                <th>${key}</th>
            `).join("")}
        </tr>
    `;
}

let _get_rows = (json, keys) => {
    return `
        ${json.map(row => {
            return `
                <tr>
                    ${keys.map(key => {
                        if (keys[0] == key) return `<td data-${key}><input type="checkbox" hidden>${row[key]}</td>`;
                        return `<td data-${key}>${row[key]}</td>`;
                    }).join("")}
                </tr>  
            `
        }).join("")}
    `;
}

let _table = json => {

    let keys = _get_keys(json);
    let ths = _get_tr_head_foot(keys);
    let rows = _get_rows(json, keys);

    return `
        <table class="table">
            <thead>
                ${ths}
            </thead>
            <tbody>
                ${rows}
            </tbody>
            <tfoot>
                ${ths}
            </tfoot>
        </table>
    `
}

let _menu = () => {
    
    return `
        <div class="header-data-table">
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
                <a hidden="hidden" id="delete-select-all" onclick="user_del()">
                    <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-m</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><line x1='320' y1='320' x2='192' y2='192' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='192' y1='320' x2='320' y2='192' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>                    
                </a>
            </div>
            <a id="table-search" class="search search-link">
                <input type="text" placeholder="Pesquisar">
            </a>
        </div>
   `; 
}

let template_list = json => {
    return `
        ${_menu()}
        ${_table(json)}
    `;
}


// Events
let event_menu = event => {
    let target = event.target.parentNode

    
    if (target.matches("#select-menu") || target.parentNode.matches("#select-menu")){
        let check = document.querySelector("tbody").querySelectorAll("input");
        _btn_visible(check);
    }else if (target.matches("#select-all") || target.parentNode.matches("#select-all")){
        let check = document.querySelector("tbody").querySelectorAll("input");
        _set_input_value(check);
    };
}

let _btn_visible = check => {
    let elements = [document.getElementById("select-all"),document.getElementById("delete-select-all")]
    elements[0].getAttribute("hidden") ? _select_menu_visible(elements, "rotate(90deg)", true, check) : _select_menu_visible(elements, "rotate(0deg)", false, check);
}

let _select_menu_visible = (elements, rotate, value, check) => {

    document.querySelector("#select-menu").style.transform = rotate;
    value ? _elements_visible(elements, true) : _elements_visible(elements, false);
    _elements_visible(check, value);
    _set_value(check, false);
}

let _elements_visible = (elements, visible) => {
    
    visible ? elements.forEach(element => element.removeAttribute("hidden")) : elements.forEach(element => element.setAttribute("hidden", "hidden"));
}

let _set_input_value = check => check[0].checked ? _set_value(check, false) : _set_value(check, true);

let _set_value = (check, value) => check.forEach(element => element.checked = value)
