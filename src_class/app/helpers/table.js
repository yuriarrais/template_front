class Table{
   
    static get_keys(json){
        if (Array.isArray(json)) json = json[0];
        let keys = []
        for (let key in json) {
            keys.push(key);
        }    
    
        return keys;
    }

    static get_tr_head_foot(keys){

        return `
            <tr>
                ${keys.map(key => {
                    return `<th>${key}</th>`  
                }).join("")}
            </tr>
        `;
    }

    static get_rows(json, keys){

        return `
            ${json.map(row => {
                return `
                     <tr>
                        ${keys.map(key => {
                            if (keys[0] == key){
                                return `<td><input hidden type="checkbox">${row[key]}</td>`
                            }else{
                                return `<td>${row[key]}</td>`
                            }
                        }).join("")}
                    </tr>  
                `
            }).join("")}
        `;
    }

    static menu(event){

        if (event.target.parentNode.matches("#select-menu") || event.target.parentNode.parentNode.matches("#select-menu")){
            let check = document.querySelector("tbody").querySelectorAll("input");
            Table._btn_visible(check);
        }else if (event.target.parentNode.matches("#select-all") || event.target.parentNode.parentNode.matches("#select-all")){
            let check = document.querySelector("tbody").querySelectorAll("input");
            Table._set_input_value(check);
        };
    }

    static _btn_visible(check){
        let elements = [document.getElementById("select-all"),document.getElementById("delete-select-all")]
        elements[0].getAttribute("hidden") ? Table._select_menu_visible(elements, "rotate(90deg)", true, check) : Table._select_menu_visible(elements, "rotate(0deg)", false, check);
    }

    static _select_menu_visible(elements, rotate, value, check){

        document.querySelector("#select-menu").style.transform = rotate;
        value ? Table._elements_visible(elements, true) : Table._elements_visible(elements, false);
        Table._elements_visible(check, value);
        Table._set_value(check, false);
    }

    static _elements_visible(elements, visible){
        
        visible ? elements.forEach(element => element.removeAttribute("hidden")) : elements.forEach(element => element.setAttribute("hidden", "hidden"));
    }

    static _set_input_value(check){
    
        check[0].checked ? Table._set_value(check, false) : Table._set_value(check, true);
    }

    static _set_value(check, value) {

        for (let i=0; i < check.length; i++) check[i].checked = value
    }
}



// let get_keys = json => {

//     if (Array.isArray(json)) json = json[0];
//     let keys = []
//     for (let key in json) {
//         keys.push(key);
//     }    
   
//     return keys;
// }

// let get_tr_head_foot = keys => {

//     return `
//         <tr>
//             ${keys.map(key => {
//                 return `<th>${key}</th>`  
//             }).join("")}
//         </tr>
//     `;
// }

// let get_rows = (json, keys) => {

//     return `
//         ${json.map(row => {
//             return `
//                 <tr>
//                     ${keys.map(key => {
//                         if (keys[0] == key){
//                             return `<td><input hidden type="checkbox">${row[key]}</td>`
//                         }else{
//                             return `<td>${row[key]}</td>`
//                         }
//                     }).join("")}
//                 </tr>  
//             `
//         }).join("")}
//     `;
// }

// let menu = event => {

//     if (event.target.parentNode.matches("#select-menu") || event.target.parentNode.parentNode.matches("#select-menu")){
//         let check = document.querySelector("tbody").querySelectorAll("input");
//         Table._btn_visible(check);
//     }else if (event.target.parentNode.matches("#select-all") || event.target.parentNode.parentNode.matches("#select-all")){
//         let check = document.querySelector("tbody").querySelectorAll("input");
//         Table._set_input_value(check);
//     };
// }

// let _btn_visible = check => {
//     let elements = [document.getElementById("select-all"),document.getElementById("delete-select-all")]
//     elements[0].getAttribute("hidden") ? Table._select_menu_visible(elements, "rotate(90deg)", true, check) : Table._select_menu_visible(elements, "rotate(0deg)", false, check);
// }

// let _select_menu_visible = (elements, rotate, value, check) => {

//     document.querySelector("#select-menu").style.transform = rotate;
//     value ? Table._elements_visible(elements, true) : Table._elements_visible(elements, false);
//     Table._elements_visible(check, value);
//     Table._set_value(check, false);
// }

// let _elements_visible = (elements, visible) => {
    
//     visible ? elements.forEach(element => element.removeAttribute("hidden")) : elements.forEach(element => element.setAttribute("hidden", "hidden"));
// }

// let _set_input_value = check => check[0].checked ? Table._set_value(check, false) : Table._set_value(check, true);

// let _set_value = (check, value) => check.forEach(element => element.checked = value)

// export {

//     menu,
//     get_keys,
//     get_tr_head_foot,
//     get_rows
// }