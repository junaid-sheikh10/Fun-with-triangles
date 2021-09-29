var s1=document.querySelector("#input1");
var s2=document.querySelector("#input2");
var s3=document.querySelector("#input3");
var button=document.querySelector("#btn");
var out=document.querySelector("#mesg");

button.addEventListener("click",takeInput)

function takeInput(){
    var side1=s1.value;
    if(side1){
        var side2 =s2.value;
        if(side2){
            var side3=s3.value;
            if(side3){
                calculate(side1,side2,side3)
            }
            else{
                console.log("enter side 3")
            }

        }
        else{
            console.log("enter side2")
        }

    }
    else{
        console.log("enter side 1")

    }


}

function calculate(a,b,c){
    var h=a+b+c
    if(h===180){
       var   an="it is a triangle"
       showMessage(an)
    }
    else{
        var ans="it is not a triangle"
        showMessage(ans)
    }

   
   
}

function showMessage(a){
    
   out.innerText=a;
    
}