document.getElementById('one').style.backgroundColor ="red"
let d = document.getElementById('demo')

d.style.backgroundColor="green"
d.style.padding ="20px"


let on= document.getElementById('on')
let two= document.getElementById('two')
let three= document.getElementById('three')

three.style.padding="20px"
three.style.borderRadius="10px"
three.style.backgroundColor="brown"
three.style.display="flex"
three.style.textAlign="center"

two.style.padding="20px"
two.style.borderRadius="10px"
two.style.border="2px solid"
two.style.backgroundColor="lightblue"
two.style.color="white"



on.style.cssText = "background-color:blue;color:white; border:2px solid;"


let tag = document.createElement('p')
tag.textContent ="hello thie is paragrapgh from js"

document.getElementById('parent').append(tag)


let tag2 = document.createElement('h1')
tag2.textContent ="hello thie is heading from js"

document.getElementById('parent').append(tag2)