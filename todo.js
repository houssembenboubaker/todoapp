
var input=document.getElementById("input");
var btn=document.getElementById("btn");

btn.addEventListener("click",function addtodo(){
  var text=document.createTextNode(input.value);
  var todo=document.createElement("li");

  todo.appendChild(text); 
  
  
  var todoliste=document.getElementById("list");
  

      if(input.value ===""){

        alert("type somthing");

    }else{

         todoliste.appendChild(todo);

        }

        input.value=""

         var rmvbtn=document.createElement("button");
         
         rmvbtn.innerText = "X";
         todo.appendChild(rmvbtn)
         rmvbtn.addEventListener("click",function (){

         
          rmvbtn.parentElement.remove();

         });

});

