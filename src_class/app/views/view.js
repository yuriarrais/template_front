class View {

    constructor(element, banner="") {

        this._banner = banner;
        this._element = element;
    }

    template(){

        throw new Error("O metodo template deve ser implementado.")
    }

    update(model="") {
        
        if (this._banner) banner.textContent = this._banner;
        this._element.innerHTML = this.template(model);
    }
}