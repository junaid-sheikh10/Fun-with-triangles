var s1=document.querySelector("#input1");
var s2=document.querySelector("#input2");
var button=document.querySelector("#btn");
var out=document.querySelector("#mesg");

button.addEventListener("click",takeInput)

function takeInput(){
    var side1=s1.value;
    if(side1){
        var side2 =s2.value;
        if(side2){
            calculate(side1,side2)

        }
        else{
            console.log("enter side2")
        }

    }
    else{
        console.log("enter side 1")

    }


}

function calculate(a,b){
    
  
    var ans=0.5*a*b
   // console.log(ans)
   showMessage(ans)
}

function showMessage(a){
    var m="the Area is "+a+"sq units "
   out.innerText=m;
    
}