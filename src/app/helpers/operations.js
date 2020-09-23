
const list = url => 
    fetch(url)
    .then(handle_status)

    
const list_one = url => list(url).then()


const list_all = url => list(url).then(handle_table)


const save = (url, json) =>  
    fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: json
    })
    .then(handle_status)
    .then(handle_msg)


const del = url => {
    fetch(url, {
        method : "DELETE"
    })
    .then(handle_status)
    .then(handle_msg)
}
