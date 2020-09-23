
let table = (element, json) => {

    element.innerHTML = template_list(json);
    element.querySelector("#table-menu").onclick = event_menu;
    element.querySelector("tbody").onclick = event_tbody;
}


