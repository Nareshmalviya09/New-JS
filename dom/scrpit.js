document.getElementById("one").textContent ="from js" 
document.getElementById("two").textContent ="two" 
document.getElementById("three").textContent ="three" 
document.getElementById("four").textContent ="four" 
document.getElementById("five").textContent ="five" 


// document.getElementById("").textContent =""

// we can perporm miltple task with id by using variable
let a = document.getElementById('six')
a.textContent = "by varialbe" 
//we can change text and tag using innerHtml
document.getElementById("ooo").innerHTML = " <u> NO HELLO <u/>"

//setAttribute************************************************
// we can apply and remove attribute using setAttribute 

a.setAttribute('align','center')
document.body.setAttribute('bgcolor','yellow')

document.getElementById('one').removeAttribute('style')

document.getElementById("oo").setAttribute('src','img.png')
 
