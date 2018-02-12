$(".ulLeftSidebar").on("mouseenter","li",  function(){
    $(this).addClass("overLi");
});

$("ul").on("mouseleave","li",  function(){
    $(this).removeClass("overLi");
});