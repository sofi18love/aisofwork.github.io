$(".submenu").click(function(){
    $(this).children(".submenu-lu").slideToggle();
})
$(function(){
    $("#btn-toogle").click(function(){
        $("#texto").toggle(1000);
    });
});

