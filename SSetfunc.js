// setInerval Function(function,timer)



// setInterval(()=> {document.write("hii..")},3000)


let st
let h=document.getElementById('h')
function str(){
    let count =0


st = setInterval(()=>{
count++;
h.textContent=count

},1000)
}
function stop(){
    clearInterval(st)
}
function reset(){
    clearInterval(st)
    h.innerHTML='0'
}

