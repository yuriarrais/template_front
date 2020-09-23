class MsgView extends View {

    constructor(element) {

        super(element);
    }


    template(message) {

        return `
            <div class="alert alert-success">
                <div class="alert-msg">
                    <svg class="alert-icon">
                        <use xlink:href="img/svg/alerts.svg#icon-alert-success"/>
                    </svg>
                    <span>${message.msg}</span>
                </div>
            </div>
        `
    }

}
