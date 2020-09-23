const handle_status = resp => resp.status == 200 ? resp.json() : JSON.parse(`{"msg":"${resp.status} - ${resp.statusText}", "type": "danger"}`);


// essa constante tem que tratar as msg - ainda falta alterar para isso
const handle_msg = json => json.type != "success" ? console.log(json.msg) : console.log(json);


const handle_table = json => json.type != "success" ? console.log(json.msg) : table(main_container, json.obj);

