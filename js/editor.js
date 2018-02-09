
//var left = document.getElementById("left");
var icon = document.getElementsByClassName("icontool");
//var right = 

//document.getElementsByClassName("fas").addEventListener("click",function(){
//    console.log("Hello World");});

icon[0].addEventListener("click", function(){
    var selection = document.getSelection();
    console.log("Left align");
     console.log(selection);
});

icon[1].addEventListener("click", function(){
    console.log("Center");
});

icon[2].addEventListener("click", function(){
    console.log("Right align");
});

icon[3].addEventListener("click", function(){
    console.log("Bold");
});

icon[4].addEventListener("click", function(){
    console.log("Italic");
});

icon[5].addEventListener("click", function(){
    console.log("unordered list");
});

icon[6].addEventListener("click", function(){
    console.log("ordered list");
});

icon[7].addEventListener("click", function(){
    console.log("image");
});

icon[8].addEventListener("click", function(){
    console.log("code");
});
// jQuery example.
$(function() {
   $('#icontools').click(function() {
      var command = $(this).data('role');
      switch(command) {
         case 'h1':
         case 'h2':
         case 'p':
            document.execCommand('formatBlock', false, '<' + command + '>');
            break;
         default:
            document.execCommand(command, false, null);
            break;
      }
   });
});