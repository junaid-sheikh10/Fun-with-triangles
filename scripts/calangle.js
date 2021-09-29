var s1=document.querySelector("#input1");
var s2=document.querySelector("#input2");
var s3=document.querySelector("#input3");
var button=document.querySelector("#btn");
var out=document.querySelector("#mesg");

button.addEventListener("click",takeInput)

function takeInput(){
    var side1=Number(s1.value);
    if(side1 && side1>0){
        var side2 =Number(s2.value && side2>0);
        if(side2){
            var side3=Number(s3.value && side3>0);
            if(side3){
                calculate(side1,side2,side3)
            }
            else{
                console.log("enter side 3")
                showMessage("enter side 3 properly")
            }

        }
        else{
            console.log("enter side2")
            showMessage("enter side 2 properly")
        }

    }
    else{
        console.log("enter side 1")
        showMessage("enter side 1 properly")

    }


}

function calculate(a,b,c){
    var h=a+b+c
    console.log(h)
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

