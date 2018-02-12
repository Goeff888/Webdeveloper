
$("ul").on("click", "li",  function(){
    $(this).toggleClass("completed"); 
});

$("ul").on("click", "span", function(evt){
   $(this).parent().fadeOut(500, function(){
    $(this).remove();
   });

   evt.stopPropagation();
});

$("input[type='text']").keypress(function(evt){
   if (evt.which === 13){
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><i class='fa fa-eraser'></i> "+ todotext +"<span class='spanlock'><i class='fa fa-lock'></i></span></li>");
   } 
});


$("#plus").on("click",function(){
   //$(".contain").clone().appendTo(".contain");
   console.log("Hallo");
   //var newList = document.createElement("div");
   //document.body.appendChild(newList);
   var newDiv = document.createElement("div");
   var newH1 = document.createElement("h1");
   var newInput = document.createElement("input");
   newDiv.class = "contain";
   newH1.innerHTML = "2. Liste";
   newInput.placeholder = "Neue Aufgabe";
   newInput.type = "text";
   document.getElementsByClassName("contain")[0].appendChild(newDiv);
   document.getElementsByClassName("contain")[1].appendChild(newH1);
   document.getElementsByClassName("contain")[1].appendChild(newInput);
});