const $Id = document.getElementById.bind(document);
const btn = $Id("btn");


let _form = () => {

    return `
        <form>
            <div class="row">
                <label class="col" disabled>
                    UID
                    <input id="uid" type="text"  placeholder="Escrever"></input>
                </label>
                <label class="col col-2">
                    Primeiro Nome
                    <input id="f_name" type="text"  placeholder="Escrever"></input>
                </label>
                <label class="col col-2">
                    Último Nome
                    <input id="l_name" type="text" ></input>
                </label>
                <label class="col col-2">
                    Email
                    <input  id="email" type="text" name="email" placeholder="Email"></input>
                </label>
                <label class="col col-2">
                    Senha
                    <input id="pwd" type="password" ></input>
                </label>
                <div class="form-footer">
                    <button id="btn"type="submit" href="#" class="btn-mp btn-mp-success">CADASTRAR</button>
                </div> 
            </div>
        </form>
    `
}


let _form_mod = (json) => {

    return `
        <form>
            <div class="row">
                <label class="col" disabled>
                    UID
                    <input id="uid" type="text" disabled value="${json.uid}"></input>
                </label>
                <label class="col col-2">
                    Primeiro Nome
                    <input id="f_name" type="text" value="${json.f_name}"></input>
                </label>
                <label class="col col-2">
                    Último Nome
                    <input id="l_name" type="text" value="${json.l_name}"></input>
                </label>
                <label class="col col-2">
                    Email
                    <input  id="email" type="text" name="email" value="${json.email}"></input>
                </label>
                <label class="col col-2">
                    Senha
                    <input id="pwd" type="password" value="${json.pwd}"></input>
                </label>
                <div class="form-footer">
                    <button id="btn"type="submit" href="#" class="btn-mp btn-mp-success">CADASTRAR</button>
                </div> 
            </div>
        </form>
    `
}


