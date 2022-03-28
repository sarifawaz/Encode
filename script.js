let text = document.getElementById("text")
let select = document.getElementById("select")
let result = document.getElementById("result")


text.addEventListener("input", ()=>{
    make_result ()
})

select.addEventListener("change", ()=>{
    make_result ()
})

function make_result (){
    if(select.value == "encode"){
        result.value = btoa(text.value)

    }else{
        result.value = atob(text.value)
    }
}