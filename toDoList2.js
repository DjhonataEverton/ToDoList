/* let val = []


function add(){
    let res = document.querySelector('div#res')
    let texto = document.getElementById('txtn').value

    val.push(`${texto}\n`)

    res.innerHTML = val
}
*/

let tarefa = []

function add(){
    var res = document.querySelector('div#res')
    var txt = document.getElementById('txtn')
    
    tarefa.push(txt.value)

    res.innerHTML += `<br>Tarefa ${tarefa.slice(-1)} <input type="button" value="Remover" onclick="remover(${txt.value})" id="${txt.value}">`

    txt.value=''
    txt.focus()
}
