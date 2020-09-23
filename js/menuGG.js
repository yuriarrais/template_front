function event_table_menu(event){
    // console.log(event.target.parentNode);
    // console.log(event.target.parentNode.parentNode);
    if (event.target.parentNode.matches("#select-menu") || event.target.parentNode.parentNode.matches("#select-menu")){
    // if (event.target.parentNode.matches("#select-menu")) {
        var element = document.getElementById("select-all")
        if (element.getAttribute("hidden")){
            document.querySelector("#select-menu").style.transform = "rotate(90deg)"
            document.getElementById("delete-select-all").removeAttribute("hidden")
            element.removeAttribute("hidden")
            var checkbox = document.querySelector("tbody").querySelectorAll("input")
                for (let i=0; i < checkbox.length; i++){
                    checkbox[i].removeAttribute("hidden")
                }
        }else{
            document.querySelector("#select-menu").style.transform = "rotate(0deg)"
            document.getElementById("delete-select-all").setAttribute("hidden", "hidden")
            element.setAttribute("hidden", "hidden")
            var checkbox = document.querySelector("tbody").querySelectorAll("input")

            for (let i=0; i < checkbox.length; i++){
                checkbox[i].setAttribute("hidden", "hidden")
                checkbox[i].checked = false
            }
        }
    }else if (event.target.parentNode.matches("#select-all") || event.target.parentNode.parentNode.matches("#select-all")){
        //var element = document.getElementById("select-all");
        checkAll(); //again, function reference, no ()
    };
}

function checkAll(){

    var check = document.querySelector("tbody").querySelectorAll("input");
    if (!check[0].checked){
        for (let i=0; i < check.length; i++){
            check[i].checked = true
        }
    }else{
        for (let i=0; i < check.length; i++){
            check[i].checked = false
        }
    }
}