
var tools = document.getElementById("left");

tools.addEventListener("click", function(){
     var text= document.getElementById("content").innerHTML;
     var selection = window.getSelection();
     document.execCommand("bold", false, null);
     console.log(text, selection);
  });


$('.toolbar').click(function() {
     
  var command = $(this).data('command');
   console.log("Hallo");
  if (command == 'h1' || command == 'h2' || command == 'p') {
    document.execCommand('formatBlock', false, command);
  }
   
  if (command == 'forecolor' || command == 'backcolor') {
    document.execCommand($(this).data('command'), false, $(this).data('value'));
  }
   
  if (command == 'createlink' || command == 'insertimage') {
    url = prompt('Enter the link here: ','http:\/\/');
    document.execCommand($(this).data('command'), false, url);
  }
   
  else document.execCommand($(this).data('command'), false, null);
   
});