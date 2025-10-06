// if else family

// -> if, if then else, ladder if else, nested if else

    // let a=parseInt(prompt("enter 1st value"))

    // if(a>0){
    //     console.log("positiv");
        
    // }
    // else{
    //     console.log("nagetiv");
        
    // }

    // let a=parseInt(prompt("enter 1st value"))
    // let b=parseInt(prompt("enter 2nd value"))
    // if(a>b ){
    //     console.log(a);   
    // }
    // else{
    //     console.log(b);
        
    // }
    // let a=parseInt(prompt("enter value"))
    
    // if(a%2==0){
    //     console.log("even");   
    // }
    // else{
    //     console.log("odd");
        
    // }


    // let a=parseInt(prompt("enter 1st value"))
    // let b=parseInt(prompt("enter 2nd value"))
    // let c=parseInt(prompt("enter 3rd value"))
    // if(b%2==0){
    //     console.log("even"); 
    //     console.log(a*b*c);
          
    // }
    // else{
    //     console.log("odd");
    //     console.log(a+b+c);  
    // }


    //ladder if else = when we have multiple condition we can use ladder if else 
//    let a=parseInt(prompt("enter 1st value"))
//          if(a>0){
//         console.log("positiv");
        
//     }
//     else if(a==0){
//         console.log("neutrol");
        
//     }
//     else{
//         console.log("nagetiv");
        
//     }

    //   let a=parseInt(prompt("enter 1st value"))
    // let b=parseInt(prompt("enter 2nd value"))
    // if(a>b ){
    //     console.log(a);   
    // }
    // else if (a==b){
    //     console.log("equal");
        
    // }
    // else{
    //     console.log(b);
    // }


// find the grade of 5 subjects

//  let a=parseInt(prompt("enter 1st subject"))
//     let b=parseInt(prompt("enter 2nd subject"))
//     let c=parseInt(prompt("enter 3rd subject"))
//     let d=parseInt(prompt("enter 4rth subject"))
//     let e=parseInt(prompt("enter 5th subject"))


//     let avg = (a+b+c+d+e)/5.0


//     console.log(avg);


//     if(avg >=90){
//         console.log("A");
        
//     }
//     else if(avg > 60){
//     console.log("B");
//     }
//     else if(avg > 40){
//       console.log("C");
//     }
//     else {
//         console.log("fail");
        
//     }
    


// nested if else 

    // let age = parseInt(prompt("enter your age"))

    // if(age>=18){
    //  let b=  parseInt( prompt("press 1 for indian"))
    //  if(b==1){
    //         alert("eligible for vote")
    //  }
    //  else{
    //     alert("not eligible")
    //  }
    // }
    // else {
    //     alert("u r undeage")
    // }


    let num = parseInt(prompt("enter your number"))
   
    if(num>0){
     if(num%2==0){

            alert(num*num)
     }
     else{
        alert(3.14*num*num*num)
     }
    }
   else if(num == -3) {
        alert(num)
    }
    else{
        alert(num)
    }

