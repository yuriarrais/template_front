// import { get_keys, get_rows, get_tr_head_foot } from "../helpers/table.js";

class UserListView extends View {

    constructor(element) {
        
        super(element, "Gerência de Usuários");
    }

    template(json) {

        let keys = Table.get_keys(json);
        let ths = Table.get_tr_head_foot(keys);
        let rows = Table.get_rows(json, keys);
        return `
            ${this._menu()}
            ${this._table(ths, rows)}
        `;
    }

    _menu() {
    
        return `
            <div class="header-data-table">
                <div id="table-menu" onclick="Table.menu(event)">
                    <a id="add">
                        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-a</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><line x1='256' y1='176' x2='256' y2='336' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='336' y1='256' x2='176' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
                    </a>
                    <a id="select-menu">
                        <svg>
                            <use xlink:href="img/menu_list.svg#dot3-horizontal"/>
                        </svg>                                                 
                    </a>
                    <a hidden="hidden" id="select-all">
                        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-e</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><polyline points='352 176 217.6 336 160 272' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
                    </a>
                    <a hidden="hidden" id="delete-select-all">
                        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5-m</title><path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/><line x1='320' y1='320' x2='192' y2='192' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='192' y1='320' x2='320' y2='192' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>                    
                    </a>
                </div>
                <a id="table-search" class="search search-link">
                    <input type="text" placeholder="Pesquisar">
                </a>
            </div>
       `; 
    }

    _table(ths, rows) {

        return `
            <table class="table">
                <thead>
                    ${ths}
                </thead>
                <tbody>
                    ${rows}
                </tbody>
                <tfoot>
                    ${ths}
                </tfoot>
            </table>
        `
    }

}

// export {
//     UserListView
// }

