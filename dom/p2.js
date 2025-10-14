//  plus minus
 
 let count = 0;

    function plus() {
      count++;
      document.getElementById("count").textContent = count;
    }

    function minus() {
   if (count !=0){
       count--;
      document.getElementById("count").textContent = count;
   }
    }



    // color change 

    function chng(){
        document.getElementById('first').style.backgroundColor = "red"
        document.getElementById('first').innerHTML='get lost'
    }
    function chng1(){
       document.getElementById('first').style.backgroundColor = "yellow"
        document.getElementById('first').innerHTML='tap here'
    }