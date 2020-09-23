// import { UserListView } from "../views/user_list.js";

class UserCtrl {

    constructor() {
        
        let $Id = document.getElementById.bind(document);
        this._content = $Id("content");
        this._msg = new Msg();
        this._msg_view = new MsgView($Id("msgs"));
    }

    list() {
        fetch("http://localhost:5000/user/")
        .then(resp => resp.json())
        .then(json => new UserListView(this._content).update(json))
    }

    // form(pk) {

    //     if (pk) {
            
    //     }else{
    //         new UserFormView(this._content).update();
    //     }
    // }

    // mod(event) {

    //     event.preventDefault();
        
    //     let user = new User(
    //         $Id("f_name"),
    //         $Id("l_name"),
    //         $Id("email"),
    //         $Id("pwd"),
    //         $Id("uid")
    //     );

    //     // fetch("http://localhost:5000/user/", {
    //     //     method: "POST",
    //     //     headers: {
    //     //         "Content-type": "application/json"
    //     //     },
    //     //     body: user.to_json()
    //     // })
    //     // .then(() => {
    //         // this.get_data();
    //         // this._msg.msg = "Registro salvo com sucesso.";
    //         // this._msg_view.update(this._msg);
    //     // });
        

    //     console.log(user.to_json());
    // }

    del(id){
        console.log(id);
        this.list();
    }

}