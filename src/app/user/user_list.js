
const main_container = document.getElementById("content");

let user_list = (id="") => id ? list_one(`http://localhost:5000/user/${id}`) : list_all("http://localhost:5000/user/")

let user_form = () => {    
    main_container.innerHTML = _form()
    document.getElementById("btn").onclick = event => {
        event.preventDefault();
        let user = new User(
            $Id("f_name").value,
            $Id("l_name").value,
            $Id("email").value,
            $Id("pwd").value,
            $Id("uid").value 
        );

        save("http://localhost:5000/user/", user.to_json())
        window.setTimeout("user_list()", 500);
    }
}

let user_form_mod = json => {
    main_container.innerHTML = _form_mod(json)
    document.getElementById("btn").onclick = event => {
        event.preventDefault();
        let user = new User(
            $Id("f_name").value,
            $Id("l_name").value,
            $Id("email").value,
            $Id("pwd").value,
            $Id("uid").value 
        );

        save("http://localhost:5000/user/", user.to_json())
        window.setTimeout("user_list()", 500);
    }
}

let user_del = () => {
    document.querySelector("tbody").querySelectorAll("input").forEach( e => {
        if (e.checked) {
            let id = e.parentNode.textContent;
            del(`http://localhost:5000/user/${id}`);
        }
    });
    window.setTimeout("user_list()", 500);
}


let event_tbody = event => { 
    let target = event.target;
    if (target.type != "checkbox") {
        let id = target.parentNode.querySelector("[data-uid]").textContent;
        user_list(id).then(json => user_form_mod(json.obj));
    }
}
