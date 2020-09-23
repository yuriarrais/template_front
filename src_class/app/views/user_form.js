class UserFormView extends View {

    constructor(element) {
        super(element, "Gerência de Usuários")
    }

    template(model) {
        
        if (model){
            return this._template_mod(model);
        }else{
            return this._template_add()
        }
    }

    _template_mod() {

        return `
                <form>
                    <div class="row">
                        <label class="col" disabled>
                            UID
                            <input type="text"  placeholder="Escrever"></input>
                        </label>
                        <label class="col col-2">
                            Primeiro Nome
                            <input type="text"  placeholder="Escrever"></input>
                        </label>
                        <label class="col col-2">
                            Último Nome
                            <input type="text" ></input>
                        </label>
                        <label class="col col-2">
                            Email
                            <input  id="txt-email" type="text" name="email" placeholder="Email"></input>
                        </label>
                        <label class="col col-2">
                            Senha
                            <input type="password" ></input>
                        </label>
                        <div class="form-footer">
                            <button type="submit" href="#" class="btn-mp btn-mp-success">CADASTRAR</button>
                        </div> 
                    </div>
                </form>
            `
    }

    _template_add(){

        return `
                <form>
                    <div class="row">
                        <label class="col col-2">
                            Primeiro Nome
                            <input type="text"  placeholder="Escrever"></input>
                        </label>
                        <label class="col col-2">
                            Último Nome
                            <input type="text" ></input>
                        </label>
                        <label class="col col-2">
                            Email
                            <input  id="txt-email" type="text" name="email" placeholder="Email"></input>
                        </label>
                        <label class="col col-2">
                            Senha
                            <input type="password" ></input>
                        </label>
                        <div class="form-footer">
                            <button type="submit" href="#" class="btn-mp btn-mp-success">CADASTRAR</button>
                        </div> 
                    </div>
                </form>
            `
    }

}
