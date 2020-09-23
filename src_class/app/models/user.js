class User {

    constructor(f_name, l_name, email, pwd, uid=null) {

        this._uid = uid;
        this._f_name = f_name;
        this._l_name = l_name;
        this._email = email;
        this._pwd = pwd;
    }

    get name() {

        return this._f_name.concat(" ", this._l_name)
    }

    to_json(){

        return JSON.stringify({
            uid: this._uid,
            f_name: this._f_name,
            l_name: this._l_name,
            email: this._email,
            pwd: this._pwd
        })
    }
}